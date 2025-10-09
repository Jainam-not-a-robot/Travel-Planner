'use client'
import { useEffect } from "react";
import axios from "axios";
const apiKey ='Mko2d7BARFTkT529JuWBnVJQGQ5Oozic';
const apiSecret ='46tvqwTgLxe5TGhB';

async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: apiKey,
        client_secret: apiSecret
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    const accessToken = response.data.access_token;
    console.log("Access Token:", accessToken);
    return accessToken;

  } catch (error) {
    console.error("Error getting token:", error.response?.data || error.message);
  }
}

async function searchFlights() {
  const token = await getAccessToken();

  if (!token) {
    console.error("No token received, skipping flight search.");
    return;
  }

  try {
    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        params: {
  originLocationCode: "NYC",
  destinationLocationCode: "LON",
  departureDate: "2025-08-01",
  adults: 1
},

        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("Flight Offers:", response.data);
  } catch (error) {
    console.error("Error searching flights:", {
  status: error.response?.status,
  errors: error.response?.data?.errors
});


  }
}

export default function Flight() {
  useEffect(() => {
    searchFlights();
  }, []); // 👈 runs once when the component mounts

  return (
    <div>
      <h1>Searching Flights...</h1>
    </div>
  );
}
