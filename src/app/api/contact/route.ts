import { Client } from "@hubspot/api-client";
import { NextResponse } from "next/server";
import { FilterOperatorEnum } from "@hubspot/api-client/lib/codegen/crm/contacts";

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, fname, lname, purpose, message } = body;

    // Create contact properties object using only standard HubSpot properties
    const properties = {
      email,
      firstname: fname,
      lastname: lname,
      form_source: 'website'
    };

    try {
      // First check if contact exists
      const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: FilterOperatorEnum.Eq,
            value: email
          }]
        }]
      });

      let contact;
      
      if (searchResponse.results && searchResponse.results.length > 0) {
        // Update existing contact
        const existingContact = searchResponse.results[0];
        contact = await hubspotClient.crm.contacts.basicApi.update(
          existingContact.id,
          { properties }
        );
      } else {
        // Create new contact
        contact = await hubspotClient.crm.contacts.basicApi.create({ properties });
      }

      return NextResponse.json({ 
        success: true, 
        contact,
        message: "Contact successfully created/updated in HubSpot" 
      });

    } catch (hubspotError: any) {
      console.error("HubSpot API Error:", hubspotError);
      return NextResponse.json({
        success: false,
        error: hubspotError.message || "Failed to create/update contact in HubSpot"
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to process request"
    }, { status: 500 });
  }
}
