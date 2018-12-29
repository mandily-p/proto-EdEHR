module.exports = function() { return{
  'patientProfile': {
    'fqn': 'patientProfile',
    'inputType': 'topLevel',
    'children': [
      {
        'fqn': 'patientProfile.undefined',
        'parentFQN': 'patientProfile',
        'topLevel': 'PatientProfile',
        'page': 'Past appointments',
        'subsection': 'Outpatient',
        'label': 'Outpatient appointments',
        'inputType': 'table',
        'options': 'Add outpatient visit',
        'css': 'row_table'
      }
    ]
  },
  'patientProfile.PatientProfile.Demographics': {
    'fqn': 'patientProfile.PatientProfile.Demographics',
    'parentFQN': 'patientProfile.PatientProfile',
    'topLevel': 'PatientProfile',
    'page': 'Demographics',
    'label': 'Demographics',
    'css': 'ehr-page',
    'children': [
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.given',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'First name',
        'elementName': 'Given',
        'inputType': 'text',
        'row': '1',
        'col': '1',
        'mandatory': 'yes',
        'dataFrom': 'case',
        'dataCaseStudy': 'Erin',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.middle',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Middle name(s)',
        'elementName': 'Middle',
        'inputType': 'text',
        'row': '1',
        'col': '2',
        'dataFrom': 'case',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.family',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Last name',
        'elementName': 'Family',
        'inputType': 'text',
        'row': '1',
        'col': '3',
        'mandatory': 'yes',
        'dataFrom': 'case',
        'dataCaseStudy': 'Johns',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.preferred_name',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Preferred name',
        'elementName': 'Preferred name',
        'inputType': 'text',
        'row': '2',
        'col': '1',
        'dataFrom': 'case',
        'dataCaseStudy': 'Erin',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.date_of_birth',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Date of birth',
        'elementName': 'Date of birth',
        'inputType': 'text',
        'row': '2',
        'col': '2',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '09-SEP-19##',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.age',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Age',
        'elementName': 'Age',
        'inputType': 'text',
        'row': '2',
        'col': '3',
        'mandatory': 'yes',
        'dataFrom': 'case',
        'dataCaseStudy': '74',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.gender',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Gender',
        'elementName': 'Gender',
        'inputType': 'select',
        'options': 'Unknown-NL-Female-NL-Male-NL-Transgender female-NL-Transgender male-NL-Undifferentiated-NL-Prefer not to say',
        'row': '3',
        'col': '1',
        'mandatory': 'yes',
        'dataFrom': 'case',
        'dataCaseStudy': 'Female',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.martial_status',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Martial status',
        'elementName': 'Martial status',
        'inputType': 'select',
        'options': 'Married-NL-Single-NL-Life partner-NL-Divorced-NL-Separated-NL-Widowed',
        'row': '3',
        'col': '2',
        'dataFrom': 'case',
        'dataCaseStudy': 'Widow',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.code_status',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Code status',
        'elementName': 'Code status',
        'inputType': 'select',
        'options': 'N/A-NL-CPR-NL-DNR M1-NL-DNR M2-NL-DNR M3-NL-DNR C1-NL-DNR C2',
        'row': '3',
        'col': '3',
        'dataFrom': '?',
        'assignment': 'N/A',
        'helperText': 'Do Not Attempt Cardiopulmonary Resuscitation (DNACP'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.primary_language',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Primary language',
        'elementName': 'Primary language',
        'inputType': 'select',
        'options': 'English-NL-French-NL-Spanish-NL-German-NL-Chinese',
        'row': '4',
        'col': '1',
        'dataFrom': 'case',
        'dataCaseStudy': 'English',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.religion',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Religion',
        'elementName': 'Religion',
        'inputType': 'text',
        'row': '4',
        'col': '2',
        'dataFrom': '?',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.identify_as_indigenous',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Do you identify as an indigenous person?',
        'elementName': 'Identify as indigenous',
        'inputType': 'select',
        'options': 'Yes-NL-No',
        'row': '4',
        'col': '3',
        'dataFrom': 'case',
        'dataCaseStudy': '(Not ticked)',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.street_address',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Street address',
        'elementName': 'Street address',
        'inputType': 'text',
        'row': '5',
        'col': '1',
        'css': 'twoOfThree',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '402 Willow St.',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.city',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'City',
        'elementName': 'City',
        'inputType': 'text',
        'row': '5',
        'col': '3',
        'dataFrom': 'manually entered',
        'dataCaseStudy': 'Vancouver',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.country',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Country',
        'elementName': 'Country',
        'inputType': 'text',
        'defaultValue': 'Canada',
        'row': '6',
        'col': '1',
        'dataFrom': 'manually entered',
        'dataCaseStudy': 'Canada',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.postal_code',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Postal code',
        'elementName': 'Postal code',
        'inputType': 'text',
        'row': '6',
        'col': '2',
        'dataFrom': 'manually entered',
        'dataCaseStudy': 'V3F 9R2',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.no_address',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'No address',
        'elementName': 'No address',
        'inputType': 'checkbox',
        'row': '6',
        'col': '3',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '(Not ticked)',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.phone_number',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Phone number',
        'elementName': 'Phone number',
        'inputType': 'phone',
        'row': '7',
        'col': '1',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '(778) 555-2947',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.email_address',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Email address',
        'elementName': 'Email address',
        'inputType': 'email',
        'row': '7',
        'col': '2',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '(leave empty)',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.occupation_student',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Occupation/student',
        'elementName': 'Occupation student',
        'inputType': 'text',
        'row': '7',
        'col': '3',
        'dataFrom': 'case',
        'dataCaseStudy': 'Retired',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.phn',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'PHN',
        'elementName': 'PHN',
        'inputType': 'text',
        'row': '8',
        'col': '1',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '12345678',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.mrn',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'MRN',
        'elementName': 'MRN',
        'inputType': 'text',
        'row': '8',
        'col': '2',
        'dataFrom': 'manually entered',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.patient_service',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Patient service',
        'elementName': 'Patient service',
        'inputType': 'text',
        'row': '8',
        'col': '3',
        'dataFrom': '?',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.next_of_kin_name',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Next of kin name',
        'elementName': 'Next of kin name',
        'inputType': 'text',
        'row': '9',
        'col': '1',
        'dataFrom': 'case',
        'dataCaseStudy': 'Thomas Johns',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.next_of_kin_relationship',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Next of kin relationship',
        'elementName': 'Next of kin relationship',
        'inputType': 'select',
        'options': 'Wife-NL-Husband-NL-Mother-NL-Father-NL-Guardian-NL-Sister-NL-Brother-NL-Daughter-NL-Son-NL-Aunt-NL-Uncle-NL-Grandmother-NL-Grandfather-NL-Friend-NL-Other',
        'row': '9',
        'col': '2',
        'dataFrom': 'case',
        'dataCaseStudy': 'Son',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.next_of_kin_phone',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Next of kin phone',
        'elementName': 'Next of kin phone',
        'inputType': 'phone',
        'row': '9',
        'col': '3',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '604-555-9865',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.decision_maker_name',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Decision maker name',
        'elementName': 'Decision maker name',
        'inputType': 'text',
        'row': '10',
        'col': '1',
        'dataFrom': 'case',
        'dataCaseStudy': 'Thomas Johns',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.decision_maker_relationship',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Decision maker relationship',
        'elementName': 'Decision maker relationship',
        'inputType': 'select',
        'options': 'Spouse-NL-Child-NL-Parent-NL-Sibling-NL-Grandparent-NL-Grandchild-NL-Friend-NL-Anyone else related by partnership-NL-Public guardian and trustee employee-NL-Other',
        'row': '10',
        'col': '2',
        'dataFrom': 'case',
        'dataCaseStudy': 'Son',
        'assignment': 'N/A'
      },
      {
        'fqn': 'patientProfile.PatientProfile.Demographics.decision_maker_phone',
        'parentFQN': 'patientProfile.PatientProfile.Demographics',
        'topLevel': 'PatientProfile',
        'page': 'Demographics',
        'label': 'Decision maker phone',
        'elementName': 'Decision maker phone',
        'inputType': 'phone',
        'row': '10',
        'col': '3',
        'dataFrom': 'manually entered',
        'dataCaseStudy': '604-555-9865',
        'assignment': 'N/A'
      }
    ]
  },
  'patientProfile.PatientProfile.Allergies.': {
    'fqn': 'patientProfile.PatientProfile.Allergies.',
    'parentFQN': 'patientProfile.PatientProfile.Allergies',
    'topLevel': 'PatientProfile',
    'page': 'Allergies',
    'label': 'Allergies',
    'css': 'ehr-page'
  },
  'patientProfile.PatientProfile.Allergies.allergies': {
    'fqn': 'patientProfile.PatientProfile.Allergies.allergies',
    'parentFQN': 'patientProfile.PatientProfile.Allergies',
    'topLevel': 'PatientProfile',
    'page': 'Allergies',
    'label': 'Allergies search',
    'elementName': 'Allergies',
    'inputType': 'text',
    'row': '2',
    'col': '1',
    'validation': 'one of these two need to be filled',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Allergies.has_no_allergies': {
    'fqn': 'patientProfile.PatientProfile.Allergies.has_no_allergies',
    'parentFQN': 'patientProfile.PatientProfile.Allergies',
    'topLevel': 'PatientProfile',
    'page': 'Allergies',
    'label': 'No known allergies',
    'elementName': 'Has no allergies',
    'inputType': 'checkbox',
    'row': '1',
    'col': '1',
    'validation': 'one of these two need to be filled',
    'dataFrom': 'case',
    'dataCaseStudy': '(ticked)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Medical.': {
    'fqn': 'patientProfile.PatientProfile.History_Medical.',
    'parentFQN': 'patientProfile.PatientProfile.History_Medical',
    'topLevel': 'PatientProfile',
    'page': 'History Medical',
    'css': 'ehr-page'
  },
  'patientProfile.PatientProfile.History_Medical.past_medical_history': {
    'fqn': 'patientProfile.PatientProfile.History_Medical.past_medical_history',
    'parentFQN': 'patientProfile.PatientProfile.History_Medical',
    'topLevel': 'PatientProfile',
    'page': 'History Medical',
    'label': 'Past medical history',
    'elementName': 'Past medical history',
    'inputType': 'textarea',
    'row': '1',
    'col': '1',
    'dataFrom': 'case',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Psychosocial.': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'css': 'ehr-page'
  },
  'patientProfile.PatientProfile.History_Psychosocial.psychosocial_history': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.psychosocial_history',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'label': 'Psychosocial history',
    'elementName': 'Psychosocial history',
    'inputType': 'textarea',
    'row': '1',
    'col': '1',
    'dataFrom': 'case',
    'dataCaseStudy': 'Feels down when she thinks about her lower financial status and her advancing age, and how she is becoming more forgetful and less energetic. Often feels alone and worries about falling and not being able to alert anyone to come to her rescue. Driving is becoming hard for her.',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Psychosocial.diet': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.diet',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'label': 'Diet',
    'elementName': 'Diet',
    'inputType': 'textarea',
    'row': '1',
    'col': '2',
    'dataFrom': 'case',
    'dataCaseStudy': 'Regular',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Psychosocial.living_situation': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.living_situation',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'label': 'Living situation',
    'elementName': 'Living situation',
    'inputType': 'textarea',
    'row': '1',
    'col': '3',
    'dataFrom': 'case',
    'dataCaseStudy': 'Son lives with her in her house',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Psychosocial.employment_school': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.employment_school',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'label': 'Employment/school',
    'elementName': 'Employment school',
    'inputType': 'textarea',
    'row': '2',
    'col': '1',
    'dataFrom': 'case',
    'dataCaseStudy': 'Retired hairdresser',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Psychosocial.hobbies': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.hobbies',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'label': 'Hobbies',
    'elementName': 'Hobbies',
    'inputType': 'textarea',
    'row': '2',
    'col': '2',
    'dataFrom': 'case',
    'dataCaseStudy': 'Bingo, Netflix, playing Solitaire and Scrabble with friends on her iPad',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Psychosocial.substance_use': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.substance_use',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'subsection': 'Behaviours Frequency',
    'label': 'Substance use',
    'elementName': 'Substance use',
    'inputType': 'checkbox',
    'row': '6',
    'col': '1',
    'dataFrom': 'case',
    'assignment': 'N/A',
    'helperText': 'Have you used any substances in the last 6 months?-NL-Have you used any substances in the last 7 days?'
  },
  'patientProfile.PatientProfile.History_Psychosocial.substance_use_frequency': {
    'fqn': 'patientProfile.PatientProfile.History_Psychosocial.substance_use_frequency',
    'parentFQN': 'patientProfile.PatientProfile.History_Psychosocial',
    'topLevel': 'PatientProfile',
    'page': 'History Psychosocial',
    'subsection': 'Behaviours Frequency',
    'label': 'Substance use frequency',
    'elementName': 'Substance use frequency',
    'inputType': 'text',
    'row': '6',
    'col': '2',
    'dataFrom': 'case',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Surgical.surgery_procedure': {
    'fqn': 'patientProfile.PatientProfile.History_Surgical.surgery_procedure',
    'parentFQN': 'patientProfile.PatientProfile.History_Surgical',
    'topLevel': 'PatientProfile',
    'page': 'History Surgical',
    'label': 'Surgery/procedure',
    'elementName': 'Surgery procedure',
    'inputType': 'text',
    'col': '1',
    'dataFrom': 'manual',
    'dataCaseStudy': 'Cesarean section',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Surgical.surgery_procedure_date': {
    'fqn': 'patientProfile.PatientProfile.History_Surgical.surgery_procedure_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Surgical',
    'topLevel': 'PatientProfile',
    'page': 'History Surgical',
    'label': 'Date',
    'elementName': 'Surgery procedure date',
    'inputType': 'text - date',
    'col': '2',
    'dataFrom': 'manual',
    'dataCaseStudy': '24-MAY-##'
  },
  'patientProfile.PatientProfile.History_Surgical.previous_admissions': {
    'fqn': 'patientProfile.PatientProfile.History_Surgical.previous_admissions',
    'parentFQN': 'patientProfile.PatientProfile.History_Surgical',
    'topLevel': 'PatientProfile',
    'page': 'History Surgical',
    'label': 'Previous admissions',
    'elementName': 'Previous admissions',
    'inputType': 'Text box',
    'col': '1',
    'dataFrom': 'manual',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Surgical.previous_admissions_date': {
    'fqn': 'patientProfile.PatientProfile.History_Surgical.previous_admissions_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Surgical',
    'topLevel': 'PatientProfile',
    'page': 'History Surgical',
    'label': 'Date',
    'elementName': 'Previous admissions date',
    'inputType': 'text - date',
    'col': '2',
    'dataFrom': 'manual'
  },
  'patientProfile.PatientProfile.History_Immunization.hep_a': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.hep_a',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Hep A',
    'elementName': 'Hep A',
    'inputType': 'checkbox',
    'row': '1',
    'col': '1'
  },
  'patientProfile.PatientProfile.History_Immunization.hep_a_date': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.hep_a_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Hep A Date',
    'elementName': 'Hep A Date',
    'inputType': 'date',
    'row': '1',
    'col': '2'
  },
  'patientProfile.PatientProfile.History_Immunization.hep_b': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.hep_b',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Hep B',
    'elementName': 'Hep B',
    'inputType': 'checkbox',
    'row': '2',
    'col': '1'
  },
  'patientProfile.PatientProfile.History_Immunization.hep_b_date': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.hep_b_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Hep B Date',
    'elementName': 'Hep B Date',
    'inputType': 'date',
    'row': '2',
    'col': '2'
  },
  'patientProfile.PatientProfile.History_Immunization.mmr': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.mmr',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'MMR',
    'elementName': 'MMR',
    'inputType': 'checkbox',
    'row': '3',
    'col': '1'
  },
  'patientProfile.PatientProfile.History_Immunization.mmr_date': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.mmr_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'MMR Date',
    'elementName': 'MMR Date',
    'inputType': 'date',
    'row': '3',
    'col': '2'
  },
  'patientProfile.PatientProfile.History_Immunization.pneumococcal': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.pneumococcal',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Pneumococcal',
    'elementName': 'Pneumococcal',
    'inputType': 'checkbox',
    'row': '4',
    'col': '1'
  },
  'patientProfile.PatientProfile.History_Immunization.pneumococcal_date': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.pneumococcal_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Pneumococcal Date',
    'elementName': 'Pneumococcal Date',
    'inputType': 'date',
    'row': '4',
    'col': '2'
  },
  'patientProfile.PatientProfile.History_Immunization.polio_diptheria_pertussis': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.polio_diptheria_pertussis',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Polio diptheria pertussis',
    'elementName': 'Polio diptheria pertussis',
    'inputType': 'checkbox',
    'row': '5',
    'col': '1'
  },
  'patientProfile.PatientProfile.History_Immunization.polio_diptheria_pertussis_date': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.polio_diptheria_pertussis_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Polio diptheria pertussis Date',
    'elementName': 'Polio diptheria pertussis Date',
    'inputType': 'date',
    'row': '5',
    'col': '2'
  },
  'patientProfile.PatientProfile.History_Immunization.tb': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.tb',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'TB',
    'elementName': 'TB',
    'inputType': 'checkbox',
    'row': '6',
    'col': '1'
  },
  'patientProfile.PatientProfile.History_Immunization.tb_date': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.tb_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'TB Date',
    'elementName': 'TB Date',
    'inputType': 'date',
    'row': '6',
    'col': '2'
  },
  'patientProfile.PatientProfile.History_Immunization.tetanus': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.tetanus',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Tetanus',
    'elementName': 'Tetanus',
    'inputType': 'checkbox',
    'row': '7',
    'col': '1'
  },
  'patientProfile.PatientProfile.History_Immunization.tetanus_date': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.tetanus_date',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Tetanus Date',
    'elementName': 'Tetanus Date',
    'inputType': 'date',
    'row': '7',
    'col': '2'
  },
  'patientProfile.PatientProfile.History_Immunization.other1': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.other1',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'elementName': 'Other1',
    'inputType': 'text',
    'row': '8',
    'col': '1',
    'validation': 'If other is selected, this is mandatory',
    'dataFrom': 'case',
    'dataCaseStudy': '(Nothing filled in)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Immunization.other_date1': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.other_date1',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Date',
    'elementName': 'Other date1',
    'inputType': 'date',
    'row': '8',
    'col': '2',
    'dataFrom': 'case',
    'dataCaseStudy': '(Nothing ticked)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Immunization.other2': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.other2',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'elementName': 'Other2',
    'inputType': 'text',
    'row': '9',
    'col': '1',
    'validation': 'If other is selected, this is mandatory',
    'dataFrom': 'case',
    'dataCaseStudy': '(Nothing filled in)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Immunization.other_date2': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.other_date2',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Date',
    'elementName': 'Other date2',
    'inputType': 'date',
    'row': '9',
    'col': '2',
    'dataFrom': 'case',
    'dataCaseStudy': '(Nothing ticked)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Immunization.other3': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.other3',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'elementName': 'Other3',
    'inputType': 'text',
    'row': '10',
    'col': '1',
    'validation': 'If other is selected, this is mandatory',
    'dataFrom': 'case',
    'dataCaseStudy': '(Nothing filled in)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Immunization.other_date3': {
    'fqn': 'patientProfile.PatientProfile.History_Immunization.other_date3',
    'parentFQN': 'patientProfile.PatientProfile.History_Immunization',
    'topLevel': 'PatientProfile',
    'page': 'History Immunization',
    'label': 'Date',
    'elementName': 'Other date3',
    'inputType': 'date',
    'row': '10',
    'col': '2',
    'dataFrom': 'case',
    'dataCaseStudy': '(Nothing ticked)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.History_Family.': {
    'fqn': 'patientProfile.PatientProfile.History_Family.',
    'parentFQN': 'patientProfile.PatientProfile.History_Family',
    'topLevel': 'PatientProfile',
    'page': 'History Family',
    'inputType': 'page',
    'css': 'ehr-page'
  },
  'patientProfile.PatientProfile.History_Family.family_medical_history': {
    'fqn': 'patientProfile.PatientProfile.History_Family.family_medical_history',
    'parentFQN': 'patientProfile.PatientProfile.History_Family',
    'topLevel': 'PatientProfile',
    'page': 'History Family',
    'label': 'Family medical history',
    'elementName': 'Family medical history',
    'inputType': 'textarea',
    'row': '1',
    'col': '1',
    'dataFrom': 'case',
    'dataCaseStudy': '(empty)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Care_team.': {
    'fqn': 'patientProfile.PatientProfile.Care_team.',
    'parentFQN': 'patientProfile.PatientProfile.Care_team',
    'topLevel': 'PatientProfile',
    'page': 'Care team',
    'inputType': 'page',
    'css': 'ehr-page'
  },
  'patientProfile.PatientProfile.Care_team.name': {
    'fqn': 'patientProfile.PatientProfile.Care_team.name',
    'parentFQN': 'patientProfile.PatientProfile.Care_team',
    'topLevel': 'PatientProfile',
    'page': 'Care team',
    'label': 'Name',
    'elementName': 'Name',
    'inputType': 'text',
    'col': '1',
    'dataFrom': 'case',
    'dataCaseStudy': 'Dr. Singh-NL-Dr. Notley-NL-Jason-NL-Jackie-NL-Gurpreet-NL-Alexa-NL-Matt-NL-Serge-NL-Trache-NL-Dr. Hunnicutt-NL-Jim-NL-Gladys-NL-Herman',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Care_team.profession': {
    'fqn': 'patientProfile.PatientProfile.Care_team.profession',
    'parentFQN': 'patientProfile.PatientProfile.Care_team',
    'topLevel': 'PatientProfile',
    'page': 'Care team',
    'label': 'Profession',
    'elementName': 'Profession',
    'inputType': 'text',
    'col': '2',
    'dataFrom': 'case',
    'dataCaseStudy': 'Physician-NL-Physician-NL-Nurse-NL-Nurse-NL-Medical radiograpeor-NL-Medical laboratory technician-NL-Medical radiographer-NL-RN-NL-Physician-NL-RN-NL-Pysiotherapy student-NL-Resp. therapist',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Past_appointments.': {
    'fqn': 'patientProfile.PatientProfile.Past_appointments.',
    'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
    'topLevel': 'PatientProfile',
    'page': 'Past appointments',
    'inputType': 'page',
    'css': 'ehr-page'
  },
  'patientProfile.PatientProfile.Past_appointments.date': {
    'fqn': 'patientProfile.PatientProfile.Past_appointments.date',
    'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
    'topLevel': 'PatientProfile',
    'page': 'Past appointments',
    'subsection': 'Outpatient',
    'label': 'Date',
    'elementName': 'Date',
    'inputType': 'text',
    'col': '1',
    'dataFrom': 'case',
    'dataCaseStudy': '1 week ago',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Past_appointments.site': {
    'fqn': 'patientProfile.PatientProfile.Past_appointments.site',
    'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
    'topLevel': 'PatientProfile',
    'page': 'Past appointments',
    'subsection': 'Outpatient',
    'label': 'Site',
    'elementName': 'Site',
    'inputType': 'text',
    'col': '2',
    'dataFrom': 'case',
    'dataCaseStudy': 'Clinic',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Past_appointments.diagnosis': {
    'fqn': 'patientProfile.PatientProfile.Past_appointments.diagnosis',
    'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
    'topLevel': 'PatientProfile',
    'page': 'Past appointments',
    'subsection': 'Outpatient',
    'label': 'Diagnosis',
    'elementName': 'Diagnosis',
    'inputType': 'text',
    'col': '4',
    'dataFrom': 'case',
    'dataCaseStudy': 'COPD',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Past_appointments.mrp': {
    'fqn': 'patientProfile.PatientProfile.Past_appointments.mrp',
    'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
    'topLevel': 'PatientProfile',
    'page': 'Past appointments',
    'subsection': 'Encounters',
    'label': 'Most responsible person',
    'elementName': 'MRP',
    'inputType': 'text',
    'col': '4',
    'dataFrom': 'case',
    'dataCaseStudy': '(none available)',
    'assignment': 'N/A'
  },
  'patientProfile.PatientProfile.Past_appointments.reason_for_visit': {
    'fqn': 'patientProfile.PatientProfile.Past_appointments.reason_for_visit',
    'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
    'topLevel': 'PatientProfile',
    'page': 'Past appointments',
    'subsection': 'Outpatient',
    'label': 'Reason for visit',
    'elementName': 'Reason for visit',
    'inputType': 'text',
    'col': '3',
    'dataFrom': 'case',
    'dataCaseStudy': 'Shortness of breath x 24 hrs',
    'assignment': 'N/A'
  }
}
}