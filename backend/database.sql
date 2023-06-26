classDiagram
direction BT
class decision {
   varchar(255) title
   date deadline
   text decision_content
   text organization_utility
   text decision_context
   text decision_benefits
   text decision_risks
   int progress_status
   int makesense_user_id
   int decision_id
}
class makesense_user {
   varchar(50) firstname
   varchar(50) lastname
   varchar(50) email
   varchar(255) password
   date birthdate
   json role
   int id
}
class survey {
   int user_id
   int decision_id
   text comment_content
   int makesense_user_id
   int Id
}
class user_decision {
   int decision_id
   int makesense_user_id
}

decision  -->  makesense_user : makesense_user_id:id
survey  -->  decision : decision_id
survey  -->  makesense_user : makesense_user_id:id
user_decision  -->  decision : decision_id
user_decision  -->  makesense_user : makesense_user_id:id
