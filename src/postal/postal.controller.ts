import { Controller, Get } from '@nestjs/common';
const fs = require('file-system');

@Controller('/postal')
export class PostalController {
    @Get()
    getByFilter() {

        const fileContent = fs.readFileSync('./src/files/postal_code.json', { encoding: 'utf-8' })
        const data = JSON.parse(fileContent);
        const response = data.filter((entry:any )=> entry.postal_code === '01040');
        if (response.length >= 1) {
        return response.map((element: any) => {
            return {
            postal_code: element.postal_code,
            colony: element.colony,
            type: element.type,
            alc_o_mun: element.a_o_m,
            state: element.state,
            city: element.city
            };
        });
        }
        return response;
    }
}