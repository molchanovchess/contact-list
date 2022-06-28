# Description
We connect to REST API, receive contacts, show contact list in the table and show datails of selected contact.

# Realization
## Project contains
1. **Model** - interface Contact {gender, name, location, email, etc.}
2. **Service** - Contact. Used for receiving data from REST API
3. 1) **contact-list Component**. Used for subscribe method to Contact service and displaying data in table.
   2) **contact-card Component**. Shows details of selected contact. Data is received from parent Component (contact-list)
   3) **contact-app Component** and others

