var nodeAtt = [
  {"id": "IT services", "target": "Technology Leaders Program", "link": "provides hardware software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Research Institute", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "National Security Program", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Consultation Studies Unit", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Core Labs Unit", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Safety and Security Unit", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Facilities and Operation Unit", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Technology Transfer Program", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Industrial Innovation and Development Program", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Development and Consulting Services", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Incubators and Accelerators Program (Badir)", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Technology Investment Program", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "IT services", "target": "Industry 4.0", "link": "provides hardware & software", "color": "#0B4E4A", "sector": "Infrastructure"},
  
  {"id": "Core Labs Unit", "target": "Research Institute", "link": "provides Labs", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Core Labs Unit", "target": "National Security Program", "link": "provides Labs", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Core Labs Unit", "target": "Consultation Studies Unit", "link": "provides Labs", "color": "#0B4E4A", "sector": "Infrastructure"},
  
  {"id": "Safety and Security Unit", "target": "Core Labs Unit", "link": "provides Safety and Security", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Safety and Security Unit", "target": "Facilities and Operation Unit", "link": "provides Safety and Security", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Safety and Security Unit", "target": "Research Institute", "link": "provides Safety and Security", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Safety and Security Unit", "target": "National Security Program", "link": "provides Safety and Security", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Safety and Security Unit", "target": "Consultation Studies Unit", "link": "provides Safety and Security", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Safety and Security Unit", "target": "Industry 4.0", "link": "provides Safety and Security", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Safety and Security Unit", "target": "Industrial Innovation and Development Program", "link": "provides Safety and Security", "color": "#0B4E4A", "sector": "Infrastructure"},

  {"id": "Facilities and Operation Unit", "target": "Core Labs Unit", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Safety and Security Unit", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "IT Services", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Research Institute", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "National Security Program", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Consultation Studies Unit", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Industry 4.0", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Technology Investment Program", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Development and Consulting Services", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Technology Transfer Program", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},
  {"id": "Facilities and Operation Unit", "target": "Industrial Innovation and Development Program", "link": "Provides Building Maintenance and Operation", "color": "#0B4E4A", "sector": "Infrastructure"},

  {"id": "Research Institute", "target": "Technology Transfer Program", "link": "provides studies", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  { "id": "Research Institute" , "target": "Industrial Innovation and Development Program" , "link" : "provides studies", "color" : "#1B2C5F", "sector" : "Research and Development"},
  { "id": "Research Institute" , "target": "Consultation Studies Unit" , "link" : "provides studies", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  { "id": "Research Institute" , "target": "National Security Program" , "link" : "provides researchers", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  { "id": "Research Institute" , "target": "Consultation Studies Unit" , "link" : "provides studies", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
 
  { "id": "Consultation Studies Unit" , "target": "Technology Transfer Program" , "link" : "provides consultation", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  { "id": "Consultation Studies Unit" , "target": "Technology Transfer Program" , "link" : "provides consultation", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  { "id": "Consultation Studies Unit" , "target": "Research Institute" , "link" : "provides consultation requests", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  
  { "id": "Technology Leaders Program" , "target": "Industrial Innovation and Development Program" , "link" : "provides studies", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  { "id": "Technology Leaders Program" , "target": "Research Institute" , "link" : "provides researchers", "color" : "#1B2C5F", "sector" : "Research and Development"} ,
  { "id": "Technology Investment Program" , "target": "Research Institute" , "link" : "provides opportunities", "color" : "#4E180B", "sector" : "Commercialization"} ,
  { "id": "Technology Investment Program" , "target": "Consultation Studies Unit" , "link" : "provides opportunities", "color" : "#4E180B", "sector" : "Commercialization"} ,
  
  { "id": "Industrial Innovation and Development Program" , "target": "Research Institute" , "link" : "provides opportunities", "color" : "#4E180B", "sector" : "Commercialization"} ,
  { "id": "Industrial Innovation and Development Program" , "target": "Consultation Studies Unit" , "link" : "provides opportunities", "color" : "#4E180B", "sector" : "Commercialization"} ,
  { "id": "Industrial Innovation and Development Program" , "target": "Technology Transfer Program" , "link" : "provides intellectual property’s products and services", "color" : "#4E180B", "sector" : "Commercialization"} ,
  
  { "id": "Development and Consulting Services" , "target": "Consultation Studies Unit" , "link" : "provides marketing and sales", "color" : "#4E180B", "sector" : "Commercialization"} ,
  { "id": "Development and Consulting Services" , "target": "Consultation Studies Unit" , "link" : "provides opportunities", "color" : "#4E180B", "sector" : "Commercialization"} ,
  { "id": "Development and Consulting Services" , "target": "Research Institute" , "link" : "provides opportunities", "color" : "#4E180B", "sector" : "Commercialization"} ,
  
  { "id": "Technology Transfer Program" , "target": "Incubators and Accelerators Program (Badir)" , "link" : "provides startup ideas", "color" : "#4E180B", "sector" : "Commercialization"},

  {"id": "Incubators and Accelerators Program (Badir)",  "color" : "#4E180B", "sector" : "Commercialization"},
  {"id": "Industry 4.0",  "color" : "#4E180B", "sector" : "Commercialization"},
  {"id": "National Security Program", "color" : "#1B2C5F", "sector" : "Research and Development"},

  { "source": "KACST" , "target": "Infrastructure", "color": "#000"},
  { "source": "KACST" , "target": "Research and Development", "color": "#000"},
  { "source": "KACST" , "target": "Commercialization", "color": "#000"},

  { "source": "Infrastructure" , "target": "IT services", "color": "#0B4E4A"},
  { "source": "Infrastructure" , "target": "Core Labs Unit","color": "#0B4E4A"},
  { "source": "Infrastructure" , "target": "Safety and Security Unit", "color": "#0B4E4A"},
  { "source": "Infrastructure" , "target": "Facilities and Operation Unit", "color": "#0B4E4A"},

  { "source": "Research and Development" , "target": "Research Institute", "color" : "#1B2C5F"},
  { "source": "Research and Development" , "target": "Consultation Studies Unit", "color" : "#1B2C5F"},
  { "source": "Research and Development" , "target": "Technology Leaders Program", "color" : "#1B2C5F"},

  { "source": "Commercialization" , "target": "Technology Investment Program", "color" : "#4E180B"},
  { "source": "Commercialization" , "target": "Industrial Innovation and Development Program", "color" : "#4E180B"},
  { "source": "Commercialization" , "target": "Development and Consulting Services", "color" : "#4E180B"},
  { "source": "Commercialization" , "target": "Technology Transfer Program", "color" : "#4E180B"}

]
