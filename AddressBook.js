class Contact{
    firstName
    lastName
    address
    state
    city
    zipCode
    email
    phoneNumber

   
    constructor(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.state = state
        this.city = city
        this.zipCode = zipCode
        this.email = email
        this.phoneNumber = phoneNumber
    }
}



function contactDetails(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
    
    
    addressBook.filter(contact => contact.firstName == firstName)
    .reduce(() => count++ , count = 0);
    if(count > 0){
        console.log("Contact With Name " + firstName + " Already Present")
    }else{
        const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let firstName_Check = firstNamePattern.test(firstName);

    const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let lastName_Check = lastNamePattern.test(lastName);

    const addressPattern = /^[A-Z][a-zA-Z0-9]{3,}/;
    let address_Check = addressPattern.test(address);

    const statePattern = /^[A-Z][a-zA-Z]{3,}/;
    let state_Check = statePattern.test(state);

    const cityPattern = /^[A-Z][a-zA-Z]{3,}/;
    let city_Check = cityPattern.test(city);

    const zipCodePattern = /^[0-9]{3}[\s]{1}[0-9]{3}/;
    let zipCode_Check = zipCodePattern.test(zipCode) ;

    const emailPattern = /^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$/;
    let email_Check = emailPattern.test(email);

    const phoneNumberPattern = /^[0-9]{2}[\s]{1}[0-9]{10}/;
    let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);

        if(firstName_Check == true && lastName_Check == true && address_Check == true && state_Check == true && city_Check == true
                        && zipCode_Check == true && email_Check == true && phoneNumber_Check == true){
           
            let newContact = new Contact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);
            console.log("Contact Added Successfully");
            
            addressBook.push(newContact);

        }else{
            throw 'Contact Details Are Invalid';
        }
    }   
}

function editContact(findName,editedVariable,variableNewValue){
    if(addressBook.length == null){
        console.log("Add Contact In Address Book");
    }else{
        addressBook.forEach(newContact => {
            if(newContact.firstName == findName){
                switch(editedVariable){
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;
                    case "address":
                        newContact.address = variableNewValue;
                        break;
                    case "state":
                        newContact.state = variableNewValue;
                        break;
                    case "city":
                        newContact.city = variableNewValue;
                        break;
                    case "zipCode":
                        newContact.zipCode = variableNewValue;
                        break;  
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;      
                }
            }
        })
    }
}

function deleteContact(first_Name){
    if(addressBook.length == null){
        console.log("Add Contact In Address Book");
    }else{
        for(let i = 0; i <addressBook.length ; i++){
            if(addressBook[i].firstName == first_Name){
                addressBook.splice(i,1);
                console.log("Contact Deleted Successfully");
            }
        }
    }
}


function countContact(){
    addressBook.reduce(() => {
        count++;
    },count = 0);
    console.log("\nTotal Contacts In Address Book Are: "+count + "\n");
}


function searchByCity_State(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        .map(contact => contact.firstName);
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        .map(contact => contact.firstName);
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else{
        console.log("Provide Right City or State Name");
    }
}


function viewByCityOrState(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        console.log("Contact Found Who Is From "+name);
        console.log(person);
    }else{
        console.log("Provide Right City or State Name");
    }
}


function countContactInCity_State(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        .reduce(() => { count++;},count = 0);
        console.log("Total Number Of Contact Found Who Is From "+name+" Are " +count);
    }else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        .reduce(() => { count++;},count = 0);
        console.log("Total Number Of Contact Found Who Is From "+name+" Are " +count);
    }else{
        console.log("Provide Right City or State Name");
    }
}

function sortContact(choice){
    console.log(addressBook.sort((newContact1,newContact2) => {
        switch(choice){
            case "firstName":
                one = newContact1.firstName;
                two = newContact2.firstName;
                break;
            case "city":
                one = newContact1.city;
                two = newContact2.city;
                break;
            case  "state":
                one = newContact1.state;
                two = newContact2.state;
                break;
            case "zipCode":
                one = newContact1.zipCode;
                two = newContact2.zipCode;
                break;
            default:
                console.log("Provide Valid Input firstName or city or state or zipCode")
        }
   
        if(one < two){
            return -1;
        }else if(one == two){
            return 0;
        }else{
            return 1;
        }
    }));
}

function selectFunction(select){
    switch(select){
        case "contactDetails":

               
                contactDetails("Praveen","km","Davanagere","Harihar","Karnataka","577 601","praveen@gmail.com","91 1234567891");
                contactDetails("Adinath","Bhor","Pune","Maharashtra","Pune","411 057","adinath@gmail.com","91 1098765432");
                
                
                contactDetails("naveen","Banu","bagalkot","Harihar","Karnataka","577 601","naveen@gmail.com","91 1234567891");               
                
                contactDetails("Jasmin","Bhasin","Pune","Maharashtra","Pune","411 057","suhas@gmail.com","91 1234567891");
                
                console.log(addressBook);
                break;
        case "editContact":
               
                editContact("praveen","city","Harihar");
                console.log(addressBook);
                break;
        case "deleteContact":
                
                deleteContact("Adinath");
                console.log(addressBook);
                break;
        case "countContact":
                countContact();
                break;
        case "searchByCity_State":
                
                searchByCity_State("state","Karnataka");
                break;
        case "viewByCityOrState":
                
                viewByCityOrState("state","Maharashtra");
                break;
        case "countContactInCity_State":
                
                countContactInCity_State("state","Maharashtra");
                countContactInCity_State("city","Pune");
                break;
        case "sortContact":
                
                sortContact("firstName");
                break;
    }
}

selectFunction("contactDetails");
selectFunction("countContact");
selectFunction("searchByCity_State");
selectFunction("editContact");
selectFunction("deleteContact");
selectFunction("countContact");
selectFunction("searchByCity_State");
selectFunction("viewByCityOrState");
selectFunction("countContactInCity_State");
selectFunction("sortContact");

