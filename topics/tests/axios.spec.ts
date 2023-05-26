import axios from 'axios';
import { assert, expect } from 'chai';
import { getData } from "../async/axios";


const options = {
    method: 'GET',
    // url: 'https://restcountries.com/v3.1/name/deutschland',
    url: 'https://demoqa.com/bookstore/v1/books',
  };

describe('Test api', () => {
    
    test('should return response', async () => {
        const response = await axios.get("https://api.instantwebtools.net/v1/passenger/644614fc25e93ea10c435bda", {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
        expect(response.status).equals(200);
    }
)
it("User can login successfully", async () => {
    var response = await axios.post(`https://api.instantwebtools.net/v1/passenger`,
    {
        "name": "Santa Claus",
        "trips": 150000,
        "airline": 1
    },
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.data["_id"]).to.exist
    expect(response.data.trips).to.eq(150000)
    const id: String = response.data["_id"];

    const response1 = await axios.get(`https://api.instantwebtools.net/v1/passenger/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    console.log(response1)
})

test('should return response', async () => {
    const bearer = await axios.post("https://dev-457931.okta.com/oauth2/aushd4c95QtFHsfWt4x6/v1/token", 
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
                "scope": "offline_access",
                "username": "api-user4@iwt.net",
                "password": "b3z0nV0cLO",
                "client_id": "0oahdhjkutaGcIK2M4x6"
            },

    })
    console.log(bearer)
    const response = await axios.get("https://api.instantwebtools.net/v2/passenger/644614fc25e93ea10c435bda", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'here should be bearer token'
        }
    })
    console.log(response)
    expect(response.status).equals(200);
}
)
})