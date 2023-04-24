import { getData } from "../async/axios";

const options = {
    method: 'GET',
    url: 'https://catfact.ninja/fact',
  };

describe('Test api', () => {
    
    test('should return response', async () => {
        const data = await getData(options)
    }
)
})