export class Contact {

    id: number;
    name: string;
    title: string;
    phone: string;
    ext: string;
    fax: string;
    email: string; 

    constructor (
         id: number,
         name: string,
         title: string,
         phone: string,
         ext: string,
         fax: string,
         email: string
    ) { 
        this.id = id;
        this.name = name;
        this.title = title;
        this.phone = phone;
        this.ext = ext;
        this.fax = fax;
        this.email = email;
     }
  }