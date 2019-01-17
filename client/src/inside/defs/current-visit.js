module.exports = function() {
  return {
    visit: {
      pageDataKey: 'visit',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'admissionDay',
                fqn: 'visit.admissionDay',
                inputType: 'day',
                label: 'Admission day',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit',
                mandatory: 'yes'
              },
              {
                elementKey: 'admissionTime',
                fqn: 'visit.admissionTime',
                inputType: 'time',
                label: 'Admission time',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit',
                mandatory: 'yes'
              },
              {
                elementKey: 'consent',
                fqn: 'visit.consent',
                inputType: 'checkbox',
                label: 'Consent for treatment',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'diagnosis',
                fqn: 'visit.diagnosis',
                inputType: 'text',
                label: 'Admitting diagnosis',
                formCss: 'twoOfThree',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit'
              },
              {
                elementKey: 'status',
                fqn: 'visit.status',
                inputType: 'select',
                label: 'Admission status',
                formColumn: '3',
                formRow: '2',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit',
                mandatory: 'yes',
                options: [
                  {
                    text: 'Admission in progress'
                  },
                  {
                    text: 'Admitted'
                  },
                  {
                    text: 'Inpatient'
                  },
                  {
                    text: 'Outpatient'
                  },
                  {
                    text: 'Surgical day care'
                  },
                  {
                    text: 'Discharge pending'
                  },
                  {
                    text: 'Discharged'
                  }
                ]
              }
            ]
          }
        ],
        columnsCount: 3
      },
      hasTable: true,
      tables: [
        {
          tableKey: 'location',
          addButtonText: 'Add new patient location',
          tableCells: [
            {
              elementKey: 'location',
              fqn: 'visit.location.location',
              inputType: 'text',
              label: 'Patient location',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit',
              mandatory: 'yes',
              helperText: 'hospital, ward #, room #, home, out patient clinic',
              tableKey: 'location'
            },
            {
              elementKey: 'transferInDay',
              fqn: 'visit.location.transferInDay',
              inputType: 'day',
              label: 'Transfer in day',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit',
              tableKey: 'location'
            },
            {
              elementKey: 'transferInTime',
              fqn: 'visit.location.transferInTime',
              inputType: 'time',
              label: 'Transfer in time',
              tableColumn: '3',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit',
              tableKey: 'location'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'location',
                    fqn: 'visit.location.location',
                    inputType: 'text',
                    label: 'Patient location',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit',
                    mandatory: 'yes',
                    helperText: 'hospital, ward #, room #, home, out patient clinic',
                    tableKey: 'location'
                  },
                  {
                    elementKey: 'transferInDay',
                    fqn: 'visit.location.transferInDay',
                    inputType: 'day',
                    label: 'Transfer in day',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit',
                    tableKey: 'location'
                  },
                  {
                    elementKey: 'transferInTime',
                    fqn: 'visit.location.transferInTime',
                    inputType: 'time',
                    label: 'Transfer in time',
                    tableColumn: '3',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit',
                    tableKey: 'location'
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        }
      ],
      pageData: {
        location: []
      }
    },
    vitals: {
      pageDataKey: 'vitals',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add vital sign record',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'vitals.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'vitals.table.unit',
              inputType: 'text',
              label: 'Unit',
              tableColumn: '1',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'vitals.table.day',
              inputType: 'text',
              label: 'Day',
              tableColumn: '1',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'vitals.table.time',
              inputType: 'text',
              label: 'Time',
              tableColumn: '1',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'temperature',
              fqn: 'vitals.table.temperature',
              inputType: 'text',
              label: 'Temperature',
              tableColumn: '1',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'vitals.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '1',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'source',
              fqn: 'vitals.table.source',
              inputType: 'select',
              label: 'Source',
              tableColumn: '2',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'oral'
                },
                {
                  text: 'axilla'
                },
                {
                  text: 'rectal'
                },
                {
                  text: 'tympanic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'rate',
              fqn: 'vitals.table.rate',
              inputType: 'text',
              label: 'Rate',
              tableColumn: '3',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'rhythm',
              fqn: 'vitals.table.rhythm',
              inputType: 'select',
              label: 'Rhythm',
              tableColumn: '4',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'regular'
                },
                {
                  text: 'irregular'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'strength',
              fqn: 'vitals.table.strength',
              inputType: 'select',
              label: 'Strength',
              tableColumn: '5',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'strong'
                },
                {
                  text: 'medium'
                },
                {
                  text: 'weak'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'systolic',
              fqn: 'vitals.table.systolic',
              inputType: 'text',
              label: 'Systolic',
              tableColumn: '6',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'diastolic',
              fqn: 'vitals.table.diastolic',
              inputType: 'text',
              label: 'Diastolic',
              tableColumn: '7',
              formColumn: '2',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'patientPosition',
              fqn: 'vitals.table.patientPosition',
              inputType: 'select',
              label: 'Patient position',
              tableColumn: '8',
              formColumn: '3',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'lying'
                },
                {
                  text: 'sitting'
                },
                {
                  text: 'standing'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'respirationRate',
              fqn: 'vitals.table.respirationRate',
              inputType: 'text',
              label: 'Respiration rate',
              tableColumn: '9',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'respirationEffort',
              fqn: 'vitals.table.respirationEffort',
              inputType: 'select',
              label: 'Respiration effort',
              tableColumn: '10',
              formColumn: '2',
              formRow: '5',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'easy'
                },
                {
                  text: 'laboured'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'oxygenSaturation',
              fqn: 'vitals.table.oxygenSaturation',
              inputType: 'text',
              label: 'Oxygen saturation',
              tableColumn: '11',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'oxygenMode',
              fqn: 'vitals.table.oxygenMode',
              inputType: 'select',
              label: 'Oxygen mode',
              tableColumn: '12',
              formColumn: '2',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'nasal prongs'
                },
                {
                  text: 'simple face mask'
                },
                {
                  text: 'rebreathing face mask'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'flowRate',
              fqn: 'vitals.table.flowRate',
              inputType: 'text',
              label: 'Flow rate',
              tableColumn: '13',
              formColumn: '3',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'vitals.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'vitals.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '1',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'vitals.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableColumn: '1',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'vitals.table.day',
                    inputType: 'text',
                    label: 'Day',
                    tableColumn: '1',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'vitals.table.time',
                    inputType: 'text',
                    label: 'Time',
                    tableColumn: '1',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'temperature',
                    fqn: 'vitals.table.temperature',
                    inputType: 'text',
                    label: 'Temperature',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'source',
                    fqn: 'vitals.table.source',
                    inputType: 'select',
                    label: 'Source',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'oral'
                      },
                      {
                        text: 'axilla'
                      },
                      {
                        text: 'rectal'
                      },
                      {
                        text: 'tympanic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'rhythm',
                    fqn: 'vitals.table.rhythm',
                    inputType: 'select',
                    label: 'Rhythm',
                    tableColumn: '4',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'regular'
                      },
                      {
                        text: 'irregular'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'strength',
                    fqn: 'vitals.table.strength',
                    inputType: 'select',
                    label: 'Strength',
                    tableColumn: '5',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'strong'
                      },
                      {
                        text: 'medium'
                      },
                      {
                        text: 'weak'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'rate',
                    fqn: 'vitals.table.rate',
                    inputType: 'text',
                    label: 'Rate',
                    tableColumn: '3',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'systolic',
                    fqn: 'vitals.table.systolic',
                    inputType: 'text',
                    label: 'Systolic',
                    tableColumn: '6',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'diastolic',
                    fqn: 'vitals.table.diastolic',
                    inputType: 'text',
                    label: 'Diastolic',
                    tableColumn: '7',
                    formColumn: '2',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'patientPosition',
                    fqn: 'vitals.table.patientPosition',
                    inputType: 'select',
                    label: 'Patient position',
                    tableColumn: '8',
                    formColumn: '3',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'lying'
                      },
                      {
                        text: 'sitting'
                      },
                      {
                        text: 'standing'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'respirationRate',
                    fqn: 'vitals.table.respirationRate',
                    inputType: 'text',
                    label: 'Respiration rate',
                    tableColumn: '9',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'respirationEffort',
                    fqn: 'vitals.table.respirationEffort',
                    inputType: 'select',
                    label: 'Respiration effort',
                    tableColumn: '10',
                    formColumn: '2',
                    formRow: '5',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'easy'
                      },
                      {
                        text: 'laboured'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '6',
                elements: [
                  {
                    elementKey: 'oxygenSaturation',
                    fqn: 'vitals.table.oxygenSaturation',
                    inputType: 'text',
                    label: 'Oxygen saturation',
                    tableColumn: '11',
                    formColumn: '1',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'oxygenMode',
                    fqn: 'vitals.table.oxygenMode',
                    inputType: 'select',
                    label: 'Oxygen mode',
                    tableColumn: '12',
                    formColumn: '2',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'nasal prongs'
                      },
                      {
                        text: 'simple face mask'
                      },
                      {
                        text: 'rebreathing face mask'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'flowRate',
                    fqn: 'vitals.table.flowRate',
                    inputType: 'text',
                    label: 'Flow rate',
                    tableColumn: '13',
                    formColumn: '3',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    neurological: {
      pageTitle: 'Assessments: Neurological',
      pageDataKey: 'neurological',
      hasTable: true,
      tables: [
        {
          tableKey: 'aments',
          addButtonText: 'Add new neurological assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'neurological.aments.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'is-3',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'profession',
              fqn: 'neurological.aments.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'is-3',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'unit',
              fqn: 'neurological.aments.unit',
              inputType: 'text',
              label: 'Unit',
              tableColumn: '3',
              formCss: 'is-2',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'day',
              fqn: 'neurological.aments.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '4',
              formCss: 'is-2',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'time',
              fqn: 'neurological.aments.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '5',
              formCss: 'is-2',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'status',
              fqn: 'neurological.aments.status',
              inputType: 'fieldset',
              label: 'Status',
              tableColumn: '6',
              fieldset: 'status',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'alert',
                  fqn: 'neurological.aments.status.alert',
                  inputType: 'checkbox',
                  label: 'Alert',
                  tableColumn: '7',
                  fieldset: 'status',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'oriented',
                  fqn: 'neurological.aments.status.oriented',
                  inputType: 'checkbox',
                  label: 'Oriented',
                  tableColumn: '8',
                  fieldset: 'status',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'confused',
                  fqn: 'neurological.aments.status.confused',
                  inputType: 'checkbox',
                  label: 'Confused',
                  tableColumn: '9',
                  fieldset: 'status',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'drowsy',
                  fqn: 'neurological.aments.status.drowsy',
                  inputType: 'checkbox',
                  label: 'Drowsy',
                  tableColumn: '10',
                  fieldset: 'status',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'unresponsive',
                  fqn: 'neurological.aments.status.unresponsive',
                  inputType: 'checkbox',
                  label: 'Unresponsive',
                  tableColumn: '11',
                  fieldset: 'status',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'dizziness',
                  fqn: 'neurological.aments.status.dizziness',
                  inputType: 'checkbox',
                  label: 'Dizziness',
                  tableColumn: '12',
                  fieldset: 'status',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'blurredVision',
                  fqn: 'neurological.aments.status.blurredVision',
                  inputType: 'checkbox',
                  label: 'Blurred vision',
                  tableColumn: '13',
                  fieldset: 'status',
                  fsetRow: '7',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                }
              ],
              type: 'fieldset',
              containerKey: 'status',
              tableKey: 'aments',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'alert',
                        fqn: 'neurological.aments.status.alert',
                        inputType: 'checkbox',
                        label: 'Alert',
                        tableColumn: '7',
                        fieldset: 'status',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'oriented',
                        fqn: 'neurological.aments.status.oriented',
                        inputType: 'checkbox',
                        label: 'Oriented',
                        tableColumn: '8',
                        fieldset: 'status',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'confused',
                        fqn: 'neurological.aments.status.confused',
                        inputType: 'checkbox',
                        label: 'Confused',
                        tableColumn: '9',
                        fieldset: 'status',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'drowsy',
                        fqn: 'neurological.aments.status.drowsy',
                        inputType: 'checkbox',
                        label: 'Drowsy',
                        tableColumn: '10',
                        fieldset: 'status',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'unresponsive',
                        fqn: 'neurological.aments.status.unresponsive',
                        inputType: 'checkbox',
                        label: 'Unresponsive',
                        tableColumn: '11',
                        fieldset: 'status',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'dizziness',
                        fqn: 'neurological.aments.status.dizziness',
                        inputType: 'checkbox',
                        label: 'Dizziness',
                        tableColumn: '12',
                        fieldset: 'status',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'blurredVision',
                        fqn: 'neurological.aments.status.blurredVision',
                        inputType: 'checkbox',
                        label: 'Blurred vision',
                        tableColumn: '13',
                        fieldset: 'status',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'alert',
              fqn: 'neurological.aments.status.alert',
              inputType: 'checkbox',
              label: 'Alert',
              tableColumn: '7',
              fieldset: 'status',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.status',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'oriented',
              fqn: 'neurological.aments.status.oriented',
              inputType: 'checkbox',
              label: 'Oriented',
              tableColumn: '8',
              fieldset: 'status',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.status',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'confused',
              fqn: 'neurological.aments.status.confused',
              inputType: 'checkbox',
              label: 'Confused',
              tableColumn: '9',
              fieldset: 'status',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.status',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'drowsy',
              fqn: 'neurological.aments.status.drowsy',
              inputType: 'checkbox',
              label: 'Drowsy',
              tableColumn: '10',
              fieldset: 'status',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.status',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'unresponsive',
              fqn: 'neurological.aments.status.unresponsive',
              inputType: 'checkbox',
              label: 'Unresponsive',
              tableColumn: '11',
              fieldset: 'status',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.status',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'dizziness',
              fqn: 'neurological.aments.status.dizziness',
              inputType: 'checkbox',
              label: 'Dizziness',
              tableColumn: '12',
              fieldset: 'status',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.status',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'blurredVision',
              fqn: 'neurological.aments.status.blurredVision',
              inputType: 'checkbox',
              label: 'Blurred vision',
              tableColumn: '13',
              fieldset: 'status',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.status',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'concious',
              fqn: 'neurological.aments.concious',
              inputType: 'fieldset',
              label: 'Loss of conciousness',
              tableColumn: '14',
              fieldset: 'concious',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'loss',
                  fqn: 'neurological.aments.concious.loss',
                  inputType: 'select',
                  tableColumn: '15',
                  fieldset: 'concious',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.concious',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'No'
                    },
                    {
                      text: 'Yes'
                    },
                    {
                      text: 'Unknown'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'duration',
                  fqn: 'neurological.aments.concious.duration',
                  inputType: 'text',
                  label: 'Duration',
                  tableColumn: '16',
                  fieldset: 'concious',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.concious',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                }
              ],
              type: 'fieldset',
              containerKey: 'concious',
              tableKey: 'aments',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'loss',
                        fqn: 'neurological.aments.concious.loss',
                        inputType: 'select',
                        tableColumn: '15',
                        fieldset: 'concious',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.concious',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'Unknown'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'duration',
                        fqn: 'neurological.aments.concious.duration',
                        inputType: 'text',
                        label: 'Duration',
                        tableColumn: '16',
                        fieldset: 'concious',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.concious',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'loss',
              fqn: 'neurological.aments.concious.loss',
              inputType: 'select',
              tableColumn: '15',
              fieldset: 'concious',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.concious',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Yes'
                },
                {
                  text: 'Unknown'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'duration',
              fqn: 'neurological.aments.concious.duration',
              inputType: 'text',
              label: 'Duration',
              tableColumn: '16',
              fieldset: 'concious',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.concious',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'glasgowComaScale',
              fqn: 'neurological.aments.glasgowComaScale',
              inputType: 'fieldset',
              label: 'Glasgow Coma Scale',
              tableColumn: '17',
              fieldset: 'glasgowComaScale',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'eyeOpening',
                  fqn: 'neurological.aments.glasgowComaScale.eyeOpening',
                  inputType: 'select',
                  label: 'Eye opening',
                  tableColumn: '18',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Spontaneous'
                    },
                    {
                      text: 'To sound'
                    },
                    {
                      text: 'To pressure'
                    },
                    {
                      text: 'None'
                    },
                    {
                      text: 'Non testable'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'verbalResponse',
                  fqn: 'neurological.aments.glasgowComaScale.verbalResponse',
                  inputType: 'select',
                  label: 'Verbal response',
                  tableColumn: '19',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Oriented'
                    },
                    {
                      text: 'Confused'
                    },
                    {
                      text: 'Words'
                    },
                    {
                      text: 'Sounds'
                    },
                    {
                      text: 'None'
                    },
                    {
                      text: 'Non testable'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'bestMotorResponse',
                  fqn: 'neurological.aments.glasgowComaScale.bestMotorResponse',
                  inputType: 'select',
                  label: 'Best motor response',
                  tableColumn: '20',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Obeys commands'
                    },
                    {
                      text: 'Localising'
                    },
                    {
                      text: 'Normal flexion'
                    },
                    {
                      text: 'Extension'
                    },
                    {
                      text: 'None'
                    },
                    {
                      text: 'Non testable'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'totalGlasgow',
                  fqn: 'neurological.aments.glasgowComaScale.totalGlasgow',
                  inputType: 'calculated',
                  label: 'Total',
                  tableColumn: '21',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                }
              ],
              type: 'fieldset',
              containerKey: 'glasgowComaScale',
              tableKey: 'aments',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'eyeOpening',
                        fqn: 'neurological.aments.glasgowComaScale.eyeOpening',
                        inputType: 'select',
                        label: 'Eye opening',
                        tableColumn: '18',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Spontaneous'
                          },
                          {
                            text: 'To sound'
                          },
                          {
                            text: 'To pressure'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'verbalResponse',
                        fqn: 'neurological.aments.glasgowComaScale.verbalResponse',
                        inputType: 'select',
                        label: 'Verbal response',
                        tableColumn: '19',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Oriented'
                          },
                          {
                            text: 'Confused'
                          },
                          {
                            text: 'Words'
                          },
                          {
                            text: 'Sounds'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'bestMotorResponse',
                        fqn: 'neurological.aments.glasgowComaScale.bestMotorResponse',
                        inputType: 'select',
                        label: 'Best motor response',
                        tableColumn: '20',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Obeys commands'
                          },
                          {
                            text: 'Localising'
                          },
                          {
                            text: 'Normal flexion'
                          },
                          {
                            text: 'Extension'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'totalGlasgow',
                        fqn: 'neurological.aments.glasgowComaScale.totalGlasgow',
                        inputType: 'calculated',
                        label: 'Total',
                        tableColumn: '21',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'eyeOpening',
              fqn: 'neurological.aments.glasgowComaScale.eyeOpening',
              inputType: 'select',
              label: 'Eye opening',
              tableColumn: '18',
              fieldset: 'glasgowComaScale',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Spontaneous'
                },
                {
                  text: 'To sound'
                },
                {
                  text: 'To pressure'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'verbalResponse',
              fqn: 'neurological.aments.glasgowComaScale.verbalResponse',
              inputType: 'select',
              label: 'Verbal response',
              tableColumn: '19',
              fieldset: 'glasgowComaScale',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Oriented'
                },
                {
                  text: 'Confused'
                },
                {
                  text: 'Words'
                },
                {
                  text: 'Sounds'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'bestMotorResponse',
              fqn: 'neurological.aments.glasgowComaScale.bestMotorResponse',
              inputType: 'select',
              label: 'Best motor response',
              tableColumn: '20',
              fieldset: 'glasgowComaScale',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Obeys commands'
                },
                {
                  text: 'Localising'
                },
                {
                  text: 'Normal flexion'
                },
                {
                  text: 'Extension'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'totalGlasgow',
              fqn: 'neurological.aments.glasgowComaScale.totalGlasgow',
              inputType: 'calculated',
              label: 'Total',
              tableColumn: '21',
              fieldset: 'glasgowComaScale',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.glasgowComaScale',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'pupils',
              fqn: 'neurological.aments.pupils',
              inputType: 'fieldset',
              label: 'Pupils',
              tableColumn: '22',
              fieldset: 'pupils',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'leftPupilSize',
                  fqn: 'neurological.aments.pupils.leftPupilSize',
                  inputType: 'select',
                  label: 'Left pupil size dd',
                  tableColumn: '23',
                  fieldset: 'pupils',
                  fsetRow: '1',
                  fsetCol: '1',
                  formCss: 'leftPupilCss',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '1'
                    },
                    {
                      text: '2'
                    },
                    {
                      text: '3'
                    },
                    {
                      text: '4'
                    },
                    {
                      text: '5'
                    },
                    {
                      text: '6'
                    },
                    {
                      text: '7'
                    },
                    {
                      text: '8'
                    },
                    {
                      text: '9'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'leftPupilResponseToLight',
                  fqn: 'neurological.aments.pupils.leftPupilResponseToLight',
                  inputType: 'select',
                  label: 'Left pupil response to light',
                  tableColumn: '24',
                  fieldset: 'pupils',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Brisk'
                    },
                    {
                      text: 'Sluggish'
                    },
                    {
                      text: 'Fixed'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'rightPupilSize',
                  fqn: 'neurological.aments.pupils.rightPupilSize',
                  inputType: 'select',
                  label: 'Right pupil size',
                  tableColumn: '25',
                  fieldset: 'pupils',
                  fsetRow: '1',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '1'
                    },
                    {
                      text: '2'
                    },
                    {
                      text: '3'
                    },
                    {
                      text: '4'
                    },
                    {
                      text: '5'
                    },
                    {
                      text: '6'
                    },
                    {
                      text: '7'
                    },
                    {
                      text: '8'
                    },
                    {
                      text: '9'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'rightPupilResponseToLight',
                  fqn: 'neurological.aments.pupils.rightPupilResponseToLight',
                  inputType: 'select',
                  label: 'Right pupil response to light',
                  tableColumn: '26',
                  fieldset: 'pupils',
                  fsetRow: '2',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Brisk'
                    },
                    {
                      text: 'Sluggish'
                    },
                    {
                      text: 'Fixed'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'bothPupils',
                  fqn: 'neurological.aments.pupils.bothPupils',
                  inputType: 'select',
                  label: 'Both pupils',
                  tableColumn: '27',
                  fieldset: 'pupils',
                  fsetRow: '1',
                  fsetCol: '3',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Equal'
                    },
                    {
                      text: 'Unequal'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '3'
                }
              ],
              type: 'fieldset',
              containerKey: 'pupils',
              tableKey: 'aments',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'leftPupilSize',
                        fqn: 'neurological.aments.pupils.leftPupilSize',
                        inputType: 'select',
                        label: 'Left pupil size que',
                        tableColumn: '23',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rightPupilSize',
                        fqn: 'neurological.aments.pupils.rightPupilSize',
                        inputType: 'select',
                        label: 'Right pupil size',
                        tableColumn: '25',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'bothPupils',
                        fqn: 'neurological.aments.pupils.bothPupils',
                        inputType: 'select',
                        label: 'Both pupils',
                        tableColumn: '27',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '3',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Equal'
                          },
                          {
                            text: 'Unequal'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '3'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'leftPupilResponseToLight',
                        fqn: 'neurological.aments.pupils.leftPupilResponseToLight',
                        inputType: 'select',
                        label: 'Left pupil response to light',
                        tableColumn: '24',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rightPupilResponseToLight',
                        fqn: 'neurological.aments.pupils.rightPupilResponseToLight',
                        inputType: 'select',
                        label: 'Right pupil response to light',
                        tableColumn: '26',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  }
                ],
                columnsCount: 3
              }
            },
            {
              elementKey: 'leftPupilSize',
              fqn: 'neurological.aments.pupils.leftPupilSize',
              inputType: 'select',
              label: 'Left pupil size wek',
              tableColumn: '23',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '1'
                },
                {
                  text: '2'
                },
                {
                  text: '3'
                },
                {
                  text: '4'
                },
                {
                  text: '5'
                },
                {
                  text: '6'
                },
                {
                  text: '7'
                },
                {
                  text: '8'
                },
                {
                  text: '9'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'leftPupilResponseToLight',
              fqn: 'neurological.aments.pupils.leftPupilResponseToLight',
              inputType: 'select',
              label: 'Left pupil response to light',
              tableColumn: '24',
              fieldset: 'pupils',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Brisk'
                },
                {
                  text: 'Sluggish'
                },
                {
                  text: 'Fixed'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'rightPupilSize',
              fqn: 'neurological.aments.pupils.rightPupilSize',
              inputType: 'select',
              label: 'Right pupil size',
              tableColumn: '25',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '1'
                },
                {
                  text: '2'
                },
                {
                  text: '3'
                },
                {
                  text: '4'
                },
                {
                  text: '5'
                },
                {
                  text: '6'
                },
                {
                  text: '7'
                },
                {
                  text: '8'
                },
                {
                  text: '9'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'rightPupilResponseToLight',
              fqn: 'neurological.aments.pupils.rightPupilResponseToLight',
              inputType: 'select',
              label: 'Right pupil response to light',
              tableColumn: '26',
              fieldset: 'pupils',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Brisk'
                },
                {
                  text: 'Sluggish'
                },
                {
                  text: 'Fixed'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'bothPupils',
              fqn: 'neurological.aments.pupils.bothPupils',
              inputType: 'select',
              label: 'Both pupils',
              tableColumn: '27',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '3',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Equal'
                },
                {
                  text: 'Unequal'
                }
              ],
              tableKey: 'aments',
              formColumn: '3'
            },
            {
              elementKey: 'stroke',
              fqn: 'neurological.aments.stroke',
              inputType: 'fieldset',
              label: 'Stroke Assessment',
              tableColumn: '28',
              fieldset: 'stroke',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'levelOfConciousness',
                  fqn: 'neurological.aments.stroke.levelOfConciousness',
                  inputType: 'select',
                  label: 'Level of conciousness',
                  tableColumn: '29',
                  fieldset: 'stroke',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Alert; keenly responsive'
                    },
                    {
                      text: '1 = Not alert; but arousable by minor stimulation'
                    },
                    {
                      text: '2 = Not alert; requires repeated stimulation'
                    },
                    {
                      text: '3 = Unresponsive or responds only with reflex'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'bestGaze',
                  fqn: 'neurological.aments.stroke.bestGaze',
                  inputType: 'select',
                  label: 'Best gaze',
                  tableColumn: '30',
                  fieldset: 'stroke',
                  fsetRow: '1',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal'
                    },
                    {
                      text: '1 = Partial gaze palsy'
                    },
                    {
                      text: '2 = Forced deviation'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'levelOfConciousnessQuestions',
                  fqn: 'neurological.aments.stroke.levelOfConciousnessQuestions',
                  inputType: 'select',
                  label: 'Level of conciousness questions',
                  tableColumn: '31',
                  fieldset: 'stroke',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = answers two questions correctly'
                    },
                    {
                      text: '1 = Answers one question correctly'
                    },
                    {
                      text: '2 = Answers neither question correctly'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'visual',
                  fqn: 'neurological.aments.stroke.visual',
                  inputType: 'select',
                  label: 'Visual',
                  tableColumn: '32',
                  fieldset: 'stroke',
                  fsetRow: '2',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No visual loss'
                    },
                    {
                      text: '1 = Partial hemianopia'
                    },
                    {
                      text: '2 = Partial paralysis'
                    },
                    {
                      text: '3 = Complete paralysis of one or both sides'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'levelOfConciousnessCommands',
                  fqn: 'neurological.aments.stroke.levelOfConciousnessCommands',
                  inputType: 'select',
                  label: 'Level of conciousness commands',
                  tableColumn: '33',
                  fieldset: 'stroke',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Performs both tasks correctly'
                    },
                    {
                      text: '1 = Performs one task correctly'
                    },
                    {
                      text: '2 = Performs neither task correctly'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'facialPalsy',
                  fqn: 'neurological.aments.stroke.facialPalsy',
                  inputType: 'select',
                  label: 'Facial palsy',
                  tableColumn: '34',
                  fieldset: 'stroke',
                  fsetRow: '3',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal symmetric movements'
                    },
                    {
                      text: '1 = Minor paralysis'
                    },
                    {
                      text: '2 = Partial paralysis'
                    },
                    {
                      text: '3 = Complete paralysis of one or both sides'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorLeftArm',
                  fqn: 'neurological.aments.stroke.motorLeftArm',
                  inputType: 'select',
                  label: 'Motor - left arm',
                  tableColumn: '35',
                  fieldset: 'stroke',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity; limb falls'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'sensory',
                  fqn: 'neurological.aments.stroke.sensory',
                  inputType: 'select',
                  label: 'Sensory',
                  tableColumn: '36',
                  fieldset: 'stroke',
                  fsetRow: '4',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal; no sensory loss'
                    },
                    {
                      text: '1 = Mild-to-moderate sensory loss'
                    },
                    {
                      text: '2 = Severe to total sensory loss'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorRightArm',
                  fqn: 'neurological.aments.stroke.motorRightArm',
                  inputType: 'select',
                  label: 'Motor - right arm',
                  tableColumn: '37',
                  fieldset: 'stroke',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity; limb falls'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'bestLanguage',
                  fqn: 'neurological.aments.stroke.bestLanguage',
                  inputType: 'select',
                  label: 'Best language',
                  tableColumn: '38',
                  fieldset: 'stroke',
                  fsetRow: '5',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No aphasia; normal'
                    },
                    {
                      text: '1 = Mild to moderate aphasia'
                    },
                    {
                      text: '2 = Severe aphasia'
                    },
                    {
                      text: '3 = Mute, global aphasia'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorLeftLeg',
                  fqn: 'neurological.aments.stroke.motorLeftLeg',
                  inputType: 'select',
                  label: 'Motor - left leg',
                  tableColumn: '39',
                  fieldset: 'stroke',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'dysarthria',
                  fqn: 'neurological.aments.stroke.dysarthria',
                  inputType: 'select',
                  label: 'Dysarthria',
                  tableColumn: '40',
                  fieldset: 'stroke',
                  fsetRow: '6',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal'
                    },
                    {
                      text: '1 = Mild to moderate aphasia'
                    },
                    {
                      text: '2 = Severe aphasia'
                    },
                    {
                      text: '3 = Mute, global aphasia'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorRightLeg',
                  fqn: 'neurological.aments.stroke.motorRightLeg',
                  inputType: 'select',
                  label: 'Motor - right leg',
                  tableColumn: '41',
                  fieldset: 'stroke',
                  fsetRow: '7',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'extinctionAndInattention',
                  fqn: 'neurological.aments.stroke.extinctionAndInattention',
                  inputType: 'select',
                  label: 'Extinction and inattention',
                  tableColumn: '42',
                  fieldset: 'stroke',
                  fsetRow: '7',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No abnormality'
                    },
                    {
                      text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                    },
                    {
                      text: '2 = Profound hemi-inattention or extinction'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                },
                {
                  elementKey: 'limbAtaxia',
                  fqn: 'neurological.aments.stroke.limbAtaxia',
                  inputType: 'select',
                  label: 'Limb ataxia',
                  tableColumn: '43',
                  fieldset: 'stroke',
                  fsetRow: '8',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Absent'
                    },
                    {
                      text: '1 = Present in one limb'
                    },
                    {
                      text: '2 = Present in two limbs'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'comments',
                  fqn: 'neurological.aments.stroke.comments',
                  inputType: 'text',
                  label: 'Comments',
                  tableColumn: '44',
                  fieldset: 'stroke',
                  fsetRow: '9',
                  fsetCol: '1',
                  formCss: 'is-two-thirds',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  tableKey: 'aments',
                  formColumn: '1'
                },
                {
                  elementKey: 'resources',
                  inputType: 'label',
                  tableColumn: '45',
                  fieldset: 'stroke',
                  fsetRow: '9',
                  fsetCol: '2',
                  formCss: 'is-one-third',
                  formOption: 'withExternalUrls',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.aments.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Resources'
                    },
                    {
                      text: 'Morse Fall Score (url)'
                    },
                    {
                      text: 'Mini-mental state examination (MMSE) (url)'
                    }
                  ],
                  tableKey: 'aments',
                  formColumn: '2'
                }
              ],
              type: 'fieldset',
              containerKey: 'stroke',
              tableKey: 'aments',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'levelOfConciousness',
                        fqn: 'neurological.aments.stroke.levelOfConciousness',
                        inputType: 'select',
                        label: 'Level of conciousness',
                        tableColumn: '29',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Alert; keenly responsive'
                          },
                          {
                            text: '1 = Not alert; but arousable by minor stimulation'
                          },
                          {
                            text: '2 = Not alert; requires repeated stimulation'
                          },
                          {
                            text: '3 = Unresponsive or responds only with reflex'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestGaze',
                        fqn: 'neurological.aments.stroke.bestGaze',
                        inputType: 'select',
                        label: 'Best gaze',
                        tableColumn: '30',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Partial gaze palsy'
                          },
                          {
                            text: '2 = Forced deviation'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'levelOfConciousnessQuestions',
                        fqn: 'neurological.aments.stroke.levelOfConciousnessQuestions',
                        inputType: 'select',
                        label: 'Level of conciousness questions',
                        tableColumn: '31',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = answers two questions correctly'
                          },
                          {
                            text: '1 = Answers one question correctly'
                          },
                          {
                            text: '2 = Answers neither question correctly'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'visual',
                        fqn: 'neurological.aments.stroke.visual',
                        inputType: 'select',
                        label: 'Visual',
                        tableColumn: '32',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No visual loss'
                          },
                          {
                            text: '1 = Partial hemianopia'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'levelOfConciousnessCommands',
                        fqn: 'neurological.aments.stroke.levelOfConciousnessCommands',
                        inputType: 'select',
                        label: 'Level of conciousness commands',
                        tableColumn: '33',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Performs both tasks correctly'
                          },
                          {
                            text: '1 = Performs one task correctly'
                          },
                          {
                            text: '2 = Performs neither task correctly'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'facialPalsy',
                        fqn: 'neurological.aments.stroke.facialPalsy',
                        inputType: 'select',
                        label: 'Facial palsy',
                        tableColumn: '34',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal symmetric movements'
                          },
                          {
                            text: '1 = Minor paralysis'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'motorLeftArm',
                        fqn: 'neurological.aments.stroke.motorLeftArm',
                        inputType: 'select',
                        label: 'Motor - left arm',
                        tableColumn: '35',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'sensory',
                        fqn: 'neurological.aments.stroke.sensory',
                        inputType: 'select',
                        label: 'Sensory',
                        tableColumn: '36',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal; no sensory loss'
                          },
                          {
                            text: '1 = Mild-to-moderate sensory loss'
                          },
                          {
                            text: '2 = Severe to total sensory loss'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'motorRightArm',
                        fqn: 'neurological.aments.stroke.motorRightArm',
                        inputType: 'select',
                        label: 'Motor - right arm',
                        tableColumn: '37',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestLanguage',
                        fqn: 'neurological.aments.stroke.bestLanguage',
                        inputType: 'select',
                        label: 'Best language',
                        tableColumn: '38',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No aphasia; normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'motorLeftLeg',
                        fqn: 'neurological.aments.stroke.motorLeftLeg',
                        inputType: 'select',
                        label: 'Motor - left leg',
                        tableColumn: '39',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'dysarthria',
                        fqn: 'neurological.aments.stroke.dysarthria',
                        inputType: 'select',
                        label: 'Dysarthria',
                        tableColumn: '40',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'motorRightLeg',
                        fqn: 'neurological.aments.stroke.motorRightLeg',
                        inputType: 'select',
                        label: 'Motor - right leg',
                        tableColumn: '41',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'extinctionAndInattention',
                        fqn: 'neurological.aments.stroke.extinctionAndInattention',
                        inputType: 'select',
                        label: 'Extinction and inattention',
                        tableColumn: '42',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No abnormality'
                          },
                          {
                            text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                          },
                          {
                            text: '2 = Profound hemi-inattention or extinction'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '8',
                    elements: [
                      {
                        elementKey: 'limbAtaxia',
                        fqn: 'neurological.aments.stroke.limbAtaxia',
                        inputType: 'select',
                        label: 'Limb ataxia',
                        tableColumn: '43',
                        fieldset: 'stroke',
                        fsetRow: '8',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Absent'
                          },
                          {
                            text: '1 = Present in one limb'
                          },
                          {
                            text: '2 = Present in two limbs'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '9',
                    elements: [
                      {
                        elementKey: 'comments',
                        fqn: 'neurological.aments.stroke.comments',
                        inputType: 'text',
                        label: 'Comments',
                        tableColumn: '44',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '1',
                        formCss: 'is-two-thirds',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'resources',
                        inputType: 'label',
                        tableColumn: '45',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '2',
                        formCss: 'is-one-third',
                        formOption: 'withExternalUrls',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Resources'
                          },
                          {
                            text: 'Morse Fall Score (url)'
                          },
                          {
                            text: 'Mini-mental state examination (MMSE) (url)'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ]
                  }
                ],
                columnsCount: 2
              }
            },
            {
              elementKey: 'levelOfConciousness',
              fqn: 'neurological.aments.stroke.levelOfConciousness',
              inputType: 'select',
              label: 'Level of conciousness',
              tableColumn: '29',
              fieldset: 'stroke',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Alert; keenly responsive'
                },
                {
                  text: '1 = Not alert; but arousable by minor stimulation'
                },
                {
                  text: '2 = Not alert; requires repeated stimulation'
                },
                {
                  text: '3 = Unresponsive or responds only with reflex'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'bestGaze',
              fqn: 'neurological.aments.stroke.bestGaze',
              inputType: 'select',
              label: 'Best gaze',
              tableColumn: '30',
              fieldset: 'stroke',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal'
                },
                {
                  text: '1 = Partial gaze palsy'
                },
                {
                  text: '2 = Forced deviation'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'levelOfConciousnessQuestions',
              fqn: 'neurological.aments.stroke.levelOfConciousnessQuestions',
              inputType: 'select',
              label: 'Level of conciousness questions',
              tableColumn: '31',
              fieldset: 'stroke',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = answers two questions correctly'
                },
                {
                  text: '1 = Answers one question correctly'
                },
                {
                  text: '2 = Answers neither question correctly'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'visual',
              fqn: 'neurological.aments.stroke.visual',
              inputType: 'select',
              label: 'Visual',
              tableColumn: '32',
              fieldset: 'stroke',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No visual loss'
                },
                {
                  text: '1 = Partial hemianopia'
                },
                {
                  text: '2 = Partial paralysis'
                },
                {
                  text: '3 = Complete paralysis of one or both sides'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'levelOfConciousnessCommands',
              fqn: 'neurological.aments.stroke.levelOfConciousnessCommands',
              inputType: 'select',
              label: 'Level of conciousness commands',
              tableColumn: '33',
              fieldset: 'stroke',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Performs both tasks correctly'
                },
                {
                  text: '1 = Performs one task correctly'
                },
                {
                  text: '2 = Performs neither task correctly'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'facialPalsy',
              fqn: 'neurological.aments.stroke.facialPalsy',
              inputType: 'select',
              label: 'Facial palsy',
              tableColumn: '34',
              fieldset: 'stroke',
              fsetRow: '3',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal symmetric movements'
                },
                {
                  text: '1 = Minor paralysis'
                },
                {
                  text: '2 = Partial paralysis'
                },
                {
                  text: '3 = Complete paralysis of one or both sides'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'motorLeftArm',
              fqn: 'neurological.aments.stroke.motorLeftArm',
              inputType: 'select',
              label: 'Motor - left arm',
              tableColumn: '35',
              fieldset: 'stroke',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity; limb falls'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'sensory',
              fqn: 'neurological.aments.stroke.sensory',
              inputType: 'select',
              label: 'Sensory',
              tableColumn: '36',
              fieldset: 'stroke',
              fsetRow: '4',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal; no sensory loss'
                },
                {
                  text: '1 = Mild-to-moderate sensory loss'
                },
                {
                  text: '2 = Severe to total sensory loss'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'motorRightArm',
              fqn: 'neurological.aments.stroke.motorRightArm',
              inputType: 'select',
              label: 'Motor - right arm',
              tableColumn: '37',
              fieldset: 'stroke',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity; limb falls'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'bestLanguage',
              fqn: 'neurological.aments.stroke.bestLanguage',
              inputType: 'select',
              label: 'Best language',
              tableColumn: '38',
              fieldset: 'stroke',
              fsetRow: '5',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No aphasia; normal'
                },
                {
                  text: '1 = Mild to moderate aphasia'
                },
                {
                  text: '2 = Severe aphasia'
                },
                {
                  text: '3 = Mute, global aphasia'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'motorLeftLeg',
              fqn: 'neurological.aments.stroke.motorLeftLeg',
              inputType: 'select',
              label: 'Motor - left leg',
              tableColumn: '39',
              fieldset: 'stroke',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'dysarthria',
              fqn: 'neurological.aments.stroke.dysarthria',
              inputType: 'select',
              label: 'Dysarthria',
              tableColumn: '40',
              fieldset: 'stroke',
              fsetRow: '6',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal'
                },
                {
                  text: '1 = Mild to moderate aphasia'
                },
                {
                  text: '2 = Severe aphasia'
                },
                {
                  text: '3 = Mute, global aphasia'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'motorRightLeg',
              fqn: 'neurological.aments.stroke.motorRightLeg',
              inputType: 'select',
              label: 'Motor - right leg',
              tableColumn: '41',
              fieldset: 'stroke',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'extinctionAndInattention',
              fqn: 'neurological.aments.stroke.extinctionAndInattention',
              inputType: 'select',
              label: 'Extinction and inattention',
              tableColumn: '42',
              fieldset: 'stroke',
              fsetRow: '7',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No abnormality'
                },
                {
                  text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                },
                {
                  text: '2 = Profound hemi-inattention or extinction'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            },
            {
              elementKey: 'limbAtaxia',
              fqn: 'neurological.aments.stroke.limbAtaxia',
              inputType: 'select',
              label: 'Limb ataxia',
              tableColumn: '43',
              fieldset: 'stroke',
              fsetRow: '8',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Absent'
                },
                {
                  text: '1 = Present in one limb'
                },
                {
                  text: '2 = Present in two limbs'
                }
              ],
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'comments',
              fqn: 'neurological.aments.stroke.comments',
              inputType: 'text',
              label: 'Comments',
              tableColumn: '44',
              fieldset: 'stroke',
              fsetRow: '9',
              fsetCol: '1',
              formCss: 'is-two-thirds',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              tableKey: 'aments',
              formColumn: '1'
            },
            {
              elementKey: 'resources',
              inputType: 'label',
              tableColumn: '45',
              fieldset: 'stroke',
              fsetRow: '9',
              fsetCol: '2',
              formCss: 'is-one-third',
              formOption: 'withExternalUrls',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Resources'
                },
                {
                  text: 'Morse Fall Score (url)'
                },
                {
                  text: 'Mini-mental state examination (MMSE) (url)'
                }
              ],
              tableKey: 'aments',
              formColumn: '2'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'neurological.aments.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'is-3',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'neurological.aments.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'is-3',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'neurological.aments.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableColumn: '3',
                    formCss: 'is-2',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'neurological.aments.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '4',
                    formCss: 'is-2',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'neurological.aments.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '5',
                    formCss: 'is-2',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'status',
                    fqn: 'neurological.aments.status',
                    inputType: 'fieldset',
                    label: 'Status',
                    tableColumn: '6',
                    fieldset: 'status',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'alert',
                        fqn: 'neurological.aments.status.alert',
                        inputType: 'checkbox',
                        label: 'Alert',
                        tableColumn: '7',
                        fieldset: 'status',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'oriented',
                        fqn: 'neurological.aments.status.oriented',
                        inputType: 'checkbox',
                        label: 'Oriented',
                        tableColumn: '8',
                        fieldset: 'status',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'confused',
                        fqn: 'neurological.aments.status.confused',
                        inputType: 'checkbox',
                        label: 'Confused',
                        tableColumn: '9',
                        fieldset: 'status',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'drowsy',
                        fqn: 'neurological.aments.status.drowsy',
                        inputType: 'checkbox',
                        label: 'Drowsy',
                        tableColumn: '10',
                        fieldset: 'status',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'unresponsive',
                        fqn: 'neurological.aments.status.unresponsive',
                        inputType: 'checkbox',
                        label: 'Unresponsive',
                        tableColumn: '11',
                        fieldset: 'status',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'dizziness',
                        fqn: 'neurological.aments.status.dizziness',
                        inputType: 'checkbox',
                        label: 'Dizziness',
                        tableColumn: '12',
                        fieldset: 'status',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'blurredVision',
                        fqn: 'neurological.aments.status.blurredVision',
                        inputType: 'checkbox',
                        label: 'Blurred vision',
                        tableColumn: '13',
                        fieldset: 'status',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'status',
                    tableKey: 'aments',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'alert',
                              fqn: 'neurological.aments.status.alert',
                              inputType: 'checkbox',
                              label: 'Alert',
                              tableColumn: '7',
                              fieldset: 'status',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'oriented',
                              fqn: 'neurological.aments.status.oriented',
                              inputType: 'checkbox',
                              label: 'Oriented',
                              tableColumn: '8',
                              fieldset: 'status',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'confused',
                              fqn: 'neurological.aments.status.confused',
                              inputType: 'checkbox',
                              label: 'Confused',
                              tableColumn: '9',
                              fieldset: 'status',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'drowsy',
                              fqn: 'neurological.aments.status.drowsy',
                              inputType: 'checkbox',
                              label: 'Drowsy',
                              tableColumn: '10',
                              fieldset: 'status',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'unresponsive',
                              fqn: 'neurological.aments.status.unresponsive',
                              inputType: 'checkbox',
                              label: 'Unresponsive',
                              tableColumn: '11',
                              fieldset: 'status',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'dizziness',
                              fqn: 'neurological.aments.status.dizziness',
                              inputType: 'checkbox',
                              label: 'Dizziness',
                              tableColumn: '12',
                              fieldset: 'status',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'blurredVision',
                              fqn: 'neurological.aments.status.blurredVision',
                              inputType: 'checkbox',
                              label: 'Blurred vision',
                              tableColumn: '13',
                              fieldset: 'status',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'concious',
                    fqn: 'neurological.aments.concious',
                    inputType: 'fieldset',
                    label: 'Loss of conciousness',
                    tableColumn: '14',
                    fieldset: 'concious',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'loss',
                        fqn: 'neurological.aments.concious.loss',
                        inputType: 'select',
                        tableColumn: '15',
                        fieldset: 'concious',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.concious',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'Unknown'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'duration',
                        fqn: 'neurological.aments.concious.duration',
                        inputType: 'text',
                        label: 'Duration',
                        tableColumn: '16',
                        fieldset: 'concious',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.concious',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'concious',
                    tableKey: 'aments',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'loss',
                              fqn: 'neurological.aments.concious.loss',
                              inputType: 'select',
                              tableColumn: '15',
                              fieldset: 'concious',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.concious',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'No'
                                },
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'Unknown'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'duration',
                              fqn: 'neurological.aments.concious.duration',
                              inputType: 'text',
                              label: 'Duration',
                              tableColumn: '16',
                              fieldset: 'concious',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.concious',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'glasgowComaScale',
                    fqn: 'neurological.aments.glasgowComaScale',
                    inputType: 'fieldset',
                    label: 'Glasgow Coma Scale',
                    tableColumn: '17',
                    fieldset: 'glasgowComaScale',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'eyeOpening',
                        fqn: 'neurological.aments.glasgowComaScale.eyeOpening',
                        inputType: 'select',
                        label: 'Eye opening',
                        tableColumn: '18',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Spontaneous'
                          },
                          {
                            text: 'To sound'
                          },
                          {
                            text: 'To pressure'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'verbalResponse',
                        fqn: 'neurological.aments.glasgowComaScale.verbalResponse',
                        inputType: 'select',
                        label: 'Verbal response',
                        tableColumn: '19',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Oriented'
                          },
                          {
                            text: 'Confused'
                          },
                          {
                            text: 'Words'
                          },
                          {
                            text: 'Sounds'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestMotorResponse',
                        fqn: 'neurological.aments.glasgowComaScale.bestMotorResponse',
                        inputType: 'select',
                        label: 'Best motor response',
                        tableColumn: '20',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Obeys commands'
                          },
                          {
                            text: 'Localising'
                          },
                          {
                            text: 'Normal flexion'
                          },
                          {
                            text: 'Extension'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'totalGlasgow',
                        fqn: 'neurological.aments.glasgowComaScale.totalGlasgow',
                        inputType: 'calculated',
                        label: 'Total',
                        tableColumn: '21',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'glasgowComaScale',
                    tableKey: 'aments',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'eyeOpening',
                              fqn: 'neurological.aments.glasgowComaScale.eyeOpening',
                              inputType: 'select',
                              label: 'Eye opening',
                              tableColumn: '18',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Spontaneous'
                                },
                                {
                                  text: 'To sound'
                                },
                                {
                                  text: 'To pressure'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'verbalResponse',
                              fqn: 'neurological.aments.glasgowComaScale.verbalResponse',
                              inputType: 'select',
                              label: 'Verbal response',
                              tableColumn: '19',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Oriented'
                                },
                                {
                                  text: 'Confused'
                                },
                                {
                                  text: 'Words'
                                },
                                {
                                  text: 'Sounds'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'bestMotorResponse',
                              fqn: 'neurological.aments.glasgowComaScale.bestMotorResponse',
                              inputType: 'select',
                              label: 'Best motor response',
                              tableColumn: '20',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Obeys commands'
                                },
                                {
                                  text: 'Localising'
                                },
                                {
                                  text: 'Normal flexion'
                                },
                                {
                                  text: 'Extension'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'totalGlasgow',
                              fqn: 'neurological.aments.glasgowComaScale.totalGlasgow',
                              inputType: 'calculated',
                              label: 'Total',
                              tableColumn: '21',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'pupils',
                    fqn: 'neurological.aments.pupils',
                    inputType: 'fieldset',
                    label: 'Pupils',
                    tableColumn: '22',
                    fieldset: 'pupils',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'leftPupilSize',
                        fqn: 'neurological.aments.pupils.leftPupilSize',
                        inputType: 'select',
                        label: 'Left pupil size elem',
                        tableColumn: '23',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'leftPupilResponseToLight',
                        fqn: 'neurological.aments.pupils.leftPupilResponseToLight',
                        inputType: 'select',
                        label: 'Left pupil response to light',
                        tableColumn: '24',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rightPupilSize',
                        fqn: 'neurological.aments.pupils.rightPupilSize',
                        inputType: 'select',
                        label: 'Right pupil size',
                        tableColumn: '25',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'rightPupilResponseToLight',
                        fqn: 'neurological.aments.pupils.rightPupilResponseToLight',
                        inputType: 'select',
                        label: 'Right pupil response to light',
                        tableColumn: '26',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'bothPupils',
                        fqn: 'neurological.aments.pupils.bothPupils',
                        inputType: 'select',
                        label: 'Both pupils',
                        tableColumn: '27',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '3',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Equal'
                          },
                          {
                            text: 'Unequal'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '3'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'pupils',
                    tableKey: 'aments',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'leftPupilSize',
                              fqn: 'neurological.aments.pupils.leftPupilSize',
                              inputType: 'select',
                              label: 'Left pupil size fffo',
                              tableColumn: '23',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '1',
                              formCss: 'is-one-third',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '1'
                                },
                                {
                                  text: '2'
                                },
                                {
                                  text: '3'
                                },
                                {
                                  text: '4'
                                },
                                {
                                  text: '5'
                                },
                                {
                                  text: '6'
                                },
                                {
                                  text: '7'
                                },
                                {
                                  text: '8'
                                },
                                {
                                  text: '9'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rightPupilSize',
                              fqn: 'neurological.aments.pupils.rightPupilSize',
                              inputType: 'select',
                              label: 'Right pupil size',
                              tableColumn: '25',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '1'
                                },
                                {
                                  text: '2'
                                },
                                {
                                  text: '3'
                                },
                                {
                                  text: '4'
                                },
                                {
                                  text: '5'
                                },
                                {
                                  text: '6'
                                },
                                {
                                  text: '7'
                                },
                                {
                                  text: '8'
                                },
                                {
                                  text: '9'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'bothPupils',
                              fqn: 'neurological.aments.pupils.bothPupils',
                              inputType: 'select',
                              label: 'Both pupils',
                              tableColumn: '27',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '3',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Equal'
                                },
                                {
                                  text: 'Unequal'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'leftPupilResponseToLight',
                              fqn: 'neurological.aments.pupils.leftPupilResponseToLight',
                              inputType: 'select',
                              label: 'Left pupil response to light',
                              tableColumn: '24',
                              fieldset: 'pupils',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Brisk'
                                },
                                {
                                  text: 'Sluggish'
                                },
                                {
                                  text: 'Fixed'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rightPupilResponseToLight',
                              fqn: 'neurological.aments.pupils.rightPupilResponseToLight',
                              inputType: 'select',
                              label: 'Right pupil response to light',
                              tableColumn: '26',
                              fieldset: 'pupils',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Brisk'
                                },
                                {
                                  text: 'Sluggish'
                                },
                                {
                                  text: 'Fixed'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 3
                    }
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'stroke',
                    fqn: 'neurological.aments.stroke',
                    inputType: 'fieldset',
                    label: 'Stroke Assessment',
                    tableColumn: '28',
                    fieldset: 'stroke',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'levelOfConciousness',
                        fqn: 'neurological.aments.stroke.levelOfConciousness',
                        inputType: 'select',
                        label: 'Level of conciousness',
                        tableColumn: '29',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Alert; keenly responsive'
                          },
                          {
                            text: '1 = Not alert; but arousable by minor stimulation'
                          },
                          {
                            text: '2 = Not alert; requires repeated stimulation'
                          },
                          {
                            text: '3 = Unresponsive or responds only with reflex'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestGaze',
                        fqn: 'neurological.aments.stroke.bestGaze',
                        inputType: 'select',
                        label: 'Best gaze',
                        tableColumn: '30',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Partial gaze palsy'
                          },
                          {
                            text: '2 = Forced deviation'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'levelOfConciousnessQuestions',
                        fqn: 'neurological.aments.stroke.levelOfConciousnessQuestions',
                        inputType: 'select',
                        label: 'Level of conciousness questions',
                        tableColumn: '31',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = answers two questions correctly'
                          },
                          {
                            text: '1 = Answers one question correctly'
                          },
                          {
                            text: '2 = Answers neither question correctly'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'visual',
                        fqn: 'neurological.aments.stroke.visual',
                        inputType: 'select',
                        label: 'Visual',
                        tableColumn: '32',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No visual loss'
                          },
                          {
                            text: '1 = Partial hemianopia'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'levelOfConciousnessCommands',
                        fqn: 'neurological.aments.stroke.levelOfConciousnessCommands',
                        inputType: 'select',
                        label: 'Level of conciousness commands',
                        tableColumn: '33',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Performs both tasks correctly'
                          },
                          {
                            text: '1 = Performs one task correctly'
                          },
                          {
                            text: '2 = Performs neither task correctly'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'facialPalsy',
                        fqn: 'neurological.aments.stroke.facialPalsy',
                        inputType: 'select',
                        label: 'Facial palsy',
                        tableColumn: '34',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal symmetric movements'
                          },
                          {
                            text: '1 = Minor paralysis'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorLeftArm',
                        fqn: 'neurological.aments.stroke.motorLeftArm',
                        inputType: 'select',
                        label: 'Motor - left arm',
                        tableColumn: '35',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'sensory',
                        fqn: 'neurological.aments.stroke.sensory',
                        inputType: 'select',
                        label: 'Sensory',
                        tableColumn: '36',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal; no sensory loss'
                          },
                          {
                            text: '1 = Mild-to-moderate sensory loss'
                          },
                          {
                            text: '2 = Severe to total sensory loss'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorRightArm',
                        fqn: 'neurological.aments.stroke.motorRightArm',
                        inputType: 'select',
                        label: 'Motor - right arm',
                        tableColumn: '37',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestLanguage',
                        fqn: 'neurological.aments.stroke.bestLanguage',
                        inputType: 'select',
                        label: 'Best language',
                        tableColumn: '38',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No aphasia; normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorLeftLeg',
                        fqn: 'neurological.aments.stroke.motorLeftLeg',
                        inputType: 'select',
                        label: 'Motor - left leg',
                        tableColumn: '39',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'dysarthria',
                        fqn: 'neurological.aments.stroke.dysarthria',
                        inputType: 'select',
                        label: 'Dysarthria',
                        tableColumn: '40',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorRightLeg',
                        fqn: 'neurological.aments.stroke.motorRightLeg',
                        inputType: 'select',
                        label: 'Motor - right leg',
                        tableColumn: '41',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'extinctionAndInattention',
                        fqn: 'neurological.aments.stroke.extinctionAndInattention',
                        inputType: 'select',
                        label: 'Extinction and inattention',
                        tableColumn: '42',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No abnormality'
                          },
                          {
                            text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                          },
                          {
                            text: '2 = Profound hemi-inattention or extinction'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'limbAtaxia',
                        fqn: 'neurological.aments.stroke.limbAtaxia',
                        inputType: 'select',
                        label: 'Limb ataxia',
                        tableColumn: '43',
                        fieldset: 'stroke',
                        fsetRow: '8',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Absent'
                          },
                          {
                            text: '1 = Present in one limb'
                          },
                          {
                            text: '2 = Present in two limbs'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'comments',
                        fqn: 'neurological.aments.stroke.comments',
                        inputType: 'text',
                        label: 'Comments',
                        tableColumn: '44',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '1',
                        formCss: 'is-two-thirds',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        tableKey: 'aments',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'resources',
                        inputType: 'label',
                        tableColumn: '45',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '2',
                        formCss: 'is-one-third',
                        formOption: 'withExternalUrls',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.aments.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Resources'
                          },
                          {
                            text: 'Morse Fall Score (url)'
                          },
                          {
                            text: 'Mini-mental state examination (MMSE) (url)'
                          }
                        ],
                        tableKey: 'aments',
                        formColumn: '2'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'stroke',
                    tableKey: 'aments',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'levelOfConciousness',
                              fqn: 'neurological.aments.stroke.levelOfConciousness',
                              inputType: 'select',
                              label: 'Level of conciousness',
                              tableColumn: '29',
                              fieldset: 'stroke',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Alert; keenly responsive'
                                },
                                {
                                  text: '1 = Not alert; but arousable by minor stimulation'
                                },
                                {
                                  text: '2 = Not alert; requires repeated stimulation'
                                },
                                {
                                  text: '3 = Unresponsive or responds only with reflex'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'bestGaze',
                              fqn: 'neurological.aments.stroke.bestGaze',
                              inputType: 'select',
                              label: 'Best gaze',
                              tableColumn: '30',
                              fieldset: 'stroke',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal'
                                },
                                {
                                  text: '1 = Partial gaze palsy'
                                },
                                {
                                  text: '2 = Forced deviation'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'levelOfConciousnessQuestions',
                              fqn: 'neurological.aments.stroke.levelOfConciousnessQuestions',
                              inputType: 'select',
                              label: 'Level of conciousness questions',
                              tableColumn: '31',
                              fieldset: 'stroke',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = answers two questions correctly'
                                },
                                {
                                  text: '1 = Answers one question correctly'
                                },
                                {
                                  text: '2 = Answers neither question correctly'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'visual',
                              fqn: 'neurological.aments.stroke.visual',
                              inputType: 'select',
                              label: 'Visual',
                              tableColumn: '32',
                              fieldset: 'stroke',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No visual loss'
                                },
                                {
                                  text: '1 = Partial hemianopia'
                                },
                                {
                                  text: '2 = Partial paralysis'
                                },
                                {
                                  text: '3 = Complete paralysis of one or both sides'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'levelOfConciousnessCommands',
                              fqn: 'neurological.aments.stroke.levelOfConciousnessCommands',
                              inputType: 'select',
                              label: 'Level of conciousness commands',
                              tableColumn: '33',
                              fieldset: 'stroke',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Performs both tasks correctly'
                                },
                                {
                                  text: '1 = Performs one task correctly'
                                },
                                {
                                  text: '2 = Performs neither task correctly'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'facialPalsy',
                              fqn: 'neurological.aments.stroke.facialPalsy',
                              inputType: 'select',
                              label: 'Facial palsy',
                              tableColumn: '34',
                              fieldset: 'stroke',
                              fsetRow: '3',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal symmetric movements'
                                },
                                {
                                  text: '1 = Minor paralysis'
                                },
                                {
                                  text: '2 = Partial paralysis'
                                },
                                {
                                  text: '3 = Complete paralysis of one or both sides'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'motorLeftArm',
                              fqn: 'neurological.aments.stroke.motorLeftArm',
                              inputType: 'select',
                              label: 'Motor - left arm',
                              tableColumn: '35',
                              fieldset: 'stroke',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity; limb falls'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'sensory',
                              fqn: 'neurological.aments.stroke.sensory',
                              inputType: 'select',
                              label: 'Sensory',
                              tableColumn: '36',
                              fieldset: 'stroke',
                              fsetRow: '4',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal; no sensory loss'
                                },
                                {
                                  text: '1 = Mild-to-moderate sensory loss'
                                },
                                {
                                  text: '2 = Severe to total sensory loss'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'motorRightArm',
                              fqn: 'neurological.aments.stroke.motorRightArm',
                              inputType: 'select',
                              label: 'Motor - right arm',
                              tableColumn: '37',
                              fieldset: 'stroke',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity; limb falls'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'bestLanguage',
                              fqn: 'neurological.aments.stroke.bestLanguage',
                              inputType: 'select',
                              label: 'Best language',
                              tableColumn: '38',
                              fieldset: 'stroke',
                              fsetRow: '5',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No aphasia; normal'
                                },
                                {
                                  text: '1 = Mild to moderate aphasia'
                                },
                                {
                                  text: '2 = Severe aphasia'
                                },
                                {
                                  text: '3 = Mute, global aphasia'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'motorLeftLeg',
                              fqn: 'neurological.aments.stroke.motorLeftLeg',
                              inputType: 'select',
                              label: 'Motor - left leg',
                              tableColumn: '39',
                              fieldset: 'stroke',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'dysarthria',
                              fqn: 'neurological.aments.stroke.dysarthria',
                              inputType: 'select',
                              label: 'Dysarthria',
                              tableColumn: '40',
                              fieldset: 'stroke',
                              fsetRow: '6',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal'
                                },
                                {
                                  text: '1 = Mild to moderate aphasia'
                                },
                                {
                                  text: '2 = Severe aphasia'
                                },
                                {
                                  text: '3 = Mute, global aphasia'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'motorRightLeg',
                              fqn: 'neurological.aments.stroke.motorRightLeg',
                              inputType: 'select',
                              label: 'Motor - right leg',
                              tableColumn: '41',
                              fieldset: 'stroke',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'extinctionAndInattention',
                              fqn: 'neurological.aments.stroke.extinctionAndInattention',
                              inputType: 'select',
                              label: 'Extinction and inattention',
                              tableColumn: '42',
                              fieldset: 'stroke',
                              fsetRow: '7',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No abnormality'
                                },
                                {
                                  text:
                                    '1 = visual, tactile, auditory, spatial, or personal inattention'
                                },
                                {
                                  text: '2 = Profound hemi-inattention or extinction'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '8',
                          elements: [
                            {
                              elementKey: 'limbAtaxia',
                              fqn: 'neurological.aments.stroke.limbAtaxia',
                              inputType: 'select',
                              label: 'Limb ataxia',
                              tableColumn: '43',
                              fieldset: 'stroke',
                              fsetRow: '8',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Absent'
                                },
                                {
                                  text: '1 = Present in one limb'
                                },
                                {
                                  text: '2 = Present in two limbs'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '9',
                          elements: [
                            {
                              elementKey: 'comments',
                              fqn: 'neurological.aments.stroke.comments',
                              inputType: 'text',
                              label: 'Comments',
                              tableColumn: '44',
                              fieldset: 'stroke',
                              fsetRow: '9',
                              fsetCol: '1',
                              formCss: 'is-two-thirds',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              tableKey: 'aments',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'resources',
                              inputType: 'label',
                              tableColumn: '45',
                              fieldset: 'stroke',
                              fsetRow: '9',
                              fsetCol: '2',
                              formCss: 'is-one-third',
                              formOption: 'withExternalUrls',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.aments.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Resources'
                                },
                                {
                                  text: 'Morse Fall Score (url)'
                                },
                                {
                                  text: 'Mini-mental state examination (MMSE) (url)'
                                }
                              ],
                              tableKey: 'aments',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        aments: []
      }
    },
    respiratory: {
      pageTitle: 'Assessments: Respiratory',
      pageDataKey: 'respiratory',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new respiratory assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'respiratory.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'is-3',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'generalComments',
              fqn: 'respiratory.table.generalComments',
              inputType: 'text',
              label: 'General comments',
              formCss: 'fullWidth',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'respiratory.table.unit',
              inputType: 'text',
              label: 'Unit',
              formCss: 'is-2',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'respiratory.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'is-2',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'respiratory.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'is-2',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'patent',
              fqn: 'respiratory.table.airway.patent',
              inputType: 'checkbox',
              label: 'Patent',
              fieldset: 'airway',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'obstructed',
              fqn: 'respiratory.table.airway.obstructed',
              inputType: 'checkbox',
              label: 'Obstructed',
              fieldset: 'airway',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oett',
              fqn: 'respiratory.table.airway.oett',
              inputType: 'checkbox',
              label: 'OETT',
              fieldset: 'airway',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'otherValue',
              fqn: 'respiratory.table.airway.otherValue',
              inputType: 'checkbox',
              label: 'Other',
              fieldset: 'airway',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'otherValue',
              fqn: 'respiratory.table.airway.otherValue',
              inputType: 'text',
              fieldset: 'airway',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory'
            },
            {
              elementKey: 'oxygenTherapy',
              fqn: 'respiratory.table.airway.oxygenTherapy',
              inputType: 'text',
              label: 'Oxygen therapy',
              fieldset: 'airway',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oxygenFlow',
              fqn: 'respiratory.table.airway.oxygenFlow',
              inputType: 'textarea',
              label: 'Oxygen flow',
              fieldset: 'airway',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'airway',
              fqn: 'respiratory.table.airway',
              inputType: 'fieldset',
              label: 'Airway',
              fieldset: 'airway',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              elements: [
                {
                  elementKey: 'patent',
                  fqn: 'respiratory.table.airway.patent',
                  inputType: 'checkbox',
                  label: 'Patent',
                  fieldset: 'airway',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'obstructed',
                  fqn: 'respiratory.table.airway.obstructed',
                  inputType: 'checkbox',
                  label: 'Obstructed',
                  fieldset: 'airway',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'oett',
                  fqn: 'respiratory.table.airway.oett',
                  inputType: 'checkbox',
                  label: 'OETT',
                  fieldset: 'airway',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'otherValue',
                  fqn: 'respiratory.table.airway.otherValue',
                  inputType: 'checkbox',
                  label: 'Other',
                  fieldset: 'airway',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'otherValue',
                  fqn: 'respiratory.table.airway.otherValue',
                  inputType: 'text',
                  fieldset: 'airway',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory'
                },
                {
                  elementKey: 'oxygenTherapy',
                  fqn: 'respiratory.table.airway.oxygenTherapy',
                  inputType: 'text',
                  label: 'Oxygen therapy',
                  fieldset: 'airway',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'oxygenFlow',
                  fqn: 'respiratory.table.airway.oxygenFlow',
                  inputType: 'textarea',
                  label: 'Oxygen flow',
                  fieldset: 'airway',
                  fsetRow: '7',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              type: 'fieldset',
              containerKey: 'airway',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'patent',
                        fqn: 'respiratory.table.airway.patent',
                        inputType: 'checkbox',
                        label: 'Patent',
                        fieldset: 'airway',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'obstructed',
                        fqn: 'respiratory.table.airway.obstructed',
                        inputType: 'checkbox',
                        label: 'Obstructed',
                        fieldset: 'airway',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'oett',
                        fqn: 'respiratory.table.airway.oett',
                        inputType: 'checkbox',
                        label: 'OETT',
                        fieldset: 'airway',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'checkbox',
                        label: 'Other',
                        fieldset: 'airway',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'checkbox',
                        label: 'Other',
                        fieldset: 'airway',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'oxygenTherapy',
                        fqn: 'respiratory.table.airway.oxygenTherapy',
                        inputType: 'text',
                        label: 'Oxygen therapy',
                        fieldset: 'airway',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'oxygenFlow',
                        fqn: 'respiratory.table.airway.oxygenFlow',
                        inputType: 'textarea',
                        label: 'Oxygen flow',
                        fieldset: 'airway',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'profession',
              fqn: 'respiratory.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'is-3',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'rul',
              fqn: 'respiratory.table.breath.rul',
              inputType: 'select',
              label: 'RUL',
              fieldset: 'breath',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              inputType: 'label',
              label: '-',
              tableColumn: 'spacer',
              fieldset: 'breath',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rml',
              fqn: 'respiratory.table.breath.rml',
              inputType: 'select',
              label: 'RML',
              fieldset: 'breath',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'lll',
              fqn: 'respiratory.table.breath.lll',
              inputType: 'select',
              label: 'LLL',
              fieldset: 'breath',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rll',
              fqn: 'respiratory.table.breath.rll',
              inputType: 'select',
              label: 'RLL',
              fieldset: 'breath',
              fsetRow: '3',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'respiratoryRhythm',
              fqn: 'respiratory.table.breath.respiratoryRhythm',
              inputType: 'select',
              label: 'Respiratory rhythm',
              fieldset: 'breath',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Irregular'
                },
                {
                  text: 'Paradoxical'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'respiratoryDepth',
              fqn: 'respiratory.table.breath.respiratoryDepth',
              inputType: 'select',
              label: 'Respiratory depth',
              fieldset: 'breath',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Shallow'
                },
                {
                  text: 'Deep'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'cough',
              fqn: 'respiratory.table.breath.cough',
              inputType: 'select',
              label: 'Cough',
              fieldset: 'breath',
              fsetRow: '4',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Nonreproductive'
                },
                {
                  text: 'Productive'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'sputumColour',
              fqn: 'respiratory.table.breath.sputumColour',
              inputType: 'select',
              label: 'Sputum colour',
              fieldset: 'breath',
              fsetRow: '5',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Mucoid'
                },
                {
                  text: 'Purulent'
                },
                {
                  text: 'Yellow-green'
                },
                {
                  text: 'Rust-coloured'
                },
                {
                  text: 'Pink, blood tinged'
                },
                {
                  text: 'Pink, frothy'
                },
                {
                  text: 'Profuse, colourless'
                },
                {
                  text: 'Bloody'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'sputumComments',
              fqn: 'respiratory.table.breath.sputumComments',
              inputType: 'text',
              label: 'Sputum comments',
              fieldset: 'breath',
              fsetRow: '6',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'breath',
              fqn: 'respiratory.table.breath',
              inputType: 'fieldset',
              label: 'Breath sounds',
              fieldset: 'breath',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              elements: [
                {
                  elementKey: 'lul',
                  fqn: 'respiratory.table.breath.lul',
                  inputType: 'select',
                  label: 'LUL',
                  fieldset: 'breath',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rul',
                  fqn: 'respiratory.table.breath.rul',
                  inputType: 'select',
                  label: 'RUL',
                  fieldset: 'breath',
                  fsetRow: '1',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  inputType: 'label',
                  label: '-',
                  tableColumn: 'spacer',
                  fieldset: 'breath',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rml',
                  fqn: 'respiratory.table.breath.rml',
                  inputType: 'select',
                  label: 'RML',
                  fieldset: 'breath',
                  fsetRow: '2',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'lll',
                  fqn: 'respiratory.table.breath.lll',
                  inputType: 'select',
                  label: 'LLL',
                  fieldset: 'breath',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rll',
                  fqn: 'respiratory.table.breath.rll',
                  inputType: 'select',
                  label: 'RLL',
                  fieldset: 'breath',
                  fsetRow: '3',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'respiratoryRhythm',
                  fqn: 'respiratory.table.breath.respiratoryRhythm',
                  inputType: 'select',
                  label: 'Respiratory rhythm',
                  fieldset: 'breath',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Regular'
                    },
                    {
                      text: 'Irregular'
                    },
                    {
                      text: 'Paradoxical'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'respiratoryDepth',
                  fqn: 'respiratory.table.breath.respiratoryDepth',
                  inputType: 'select',
                  label: 'Respiratory depth',
                  fieldset: 'breath',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Shallow'
                    },
                    {
                      text: 'Deep'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'cough',
                  fqn: 'respiratory.table.breath.cough',
                  inputType: 'select',
                  label: 'Cough',
                  fieldset: 'breath',
                  fsetRow: '4',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'No'
                    },
                    {
                      text: 'Nonreproductive'
                    },
                    {
                      text: 'Productive'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'sputumColour',
                  fqn: 'respiratory.table.breath.sputumColour',
                  inputType: 'select',
                  label: 'Sputum colour',
                  fieldset: 'breath',
                  fsetRow: '5',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Mucoid'
                    },
                    {
                      text: 'Purulent'
                    },
                    {
                      text: 'Yellow-green'
                    },
                    {
                      text: 'Rust-coloured'
                    },
                    {
                      text: 'Pink, blood tinged'
                    },
                    {
                      text: 'Pink, frothy'
                    },
                    {
                      text: 'Profuse, colourless'
                    },
                    {
                      text: 'Bloody'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'sputumComments',
                  fqn: 'respiratory.table.breath.sputumComments',
                  inputType: 'text',
                  label: 'Sputum comments',
                  fieldset: 'breath',
                  fsetRow: '6',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '2'
                }
              ],
              type: 'fieldset',
              containerKey: 'breath',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'lul',
                        fqn: 'respiratory.table.breath.lul',
                        inputType: 'select',
                        label: 'LUL',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rul',
                        fqn: 'respiratory.table.breath.rul',
                        inputType: 'select',
                        label: 'RUL',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        inputType: 'label',
                        label: '-',
                        tableColumn: 'spacer',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rml',
                        fqn: 'respiratory.table.breath.rml',
                        inputType: 'select',
                        label: 'RML',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'lll',
                        fqn: 'respiratory.table.breath.lll',
                        inputType: 'select',
                        label: 'LLL',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rll',
                        fqn: 'respiratory.table.breath.rll',
                        inputType: 'select',
                        label: 'RLL',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'respiratoryRhythm',
                        fqn: 'respiratory.table.breath.respiratoryRhythm',
                        inputType: 'select',
                        label: 'Respiratory rhythm',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Regular'
                          },
                          {
                            text: 'Irregular'
                          },
                          {
                            text: 'Paradoxical'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'cough',
                        fqn: 'respiratory.table.breath.cough',
                        inputType: 'select',
                        label: 'Cough',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Nonreproductive'
                          },
                          {
                            text: 'Productive'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'respiratoryDepth',
                        fqn: 'respiratory.table.breath.respiratoryDepth',
                        inputType: 'select',
                        label: 'Respiratory depth',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Shallow'
                          },
                          {
                            text: 'Deep'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'sputumColour',
                        fqn: 'respiratory.table.breath.sputumColour',
                        inputType: 'select',
                        label: 'Sputum colour',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Mucoid'
                          },
                          {
                            text: 'Purulent'
                          },
                          {
                            text: 'Yellow-green'
                          },
                          {
                            text: 'Rust-coloured'
                          },
                          {
                            text: 'Pink, blood tinged'
                          },
                          {
                            text: 'Pink, frothy'
                          },
                          {
                            text: 'Profuse, colourless'
                          },
                          {
                            text: 'Bloody'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'sputumComments',
                        fqn: 'respiratory.table.breath.sputumComments',
                        inputType: 'text',
                        label: 'Sputum comments',
                        fieldset: 'breath',
                        fsetRow: '6',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  }
                ],
                columnsCount: 2
              }
            },
            {
              elementKey: 'lul',
              fqn: 'respiratory.table.breath.lul',
              inputType: 'select',
              label: 'LUL',
              fieldset: 'breath',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'respiratory.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'is-3',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'respiratory.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'is-3',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'respiratory.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    formCss: 'is-2',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'respiratory.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'is-2',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'respiratory.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'is-2',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'airway',
                    fqn: 'respiratory.table.airway',
                    inputType: 'fieldset',
                    label: 'Airway',
                    fieldset: 'airway',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    elements: [
                      {
                        elementKey: 'patent',
                        fqn: 'respiratory.table.airway.patent',
                        inputType: 'checkbox',
                        label: 'Patent',
                        fieldset: 'airway',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'obstructed',
                        fqn: 'respiratory.table.airway.obstructed',
                        inputType: 'checkbox',
                        label: 'Obstructed',
                        fieldset: 'airway',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'oett',
                        fqn: 'respiratory.table.airway.oett',
                        inputType: 'checkbox',
                        label: 'OETT',
                        fieldset: 'airway',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'checkbox',
                        label: 'Other',
                        fieldset: 'airway',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'text',
                        fieldset: 'airway',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory'
                      },
                      {
                        elementKey: 'oxygenTherapy',
                        fqn: 'respiratory.table.airway.oxygenTherapy',
                        inputType: 'text',
                        label: 'Oxygen therapy',
                        fieldset: 'airway',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'oxygenFlow',
                        fqn: 'respiratory.table.airway.oxygenFlow',
                        inputType: 'textarea',
                        label: 'Oxygen flow',
                        fieldset: 'airway',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'airway',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'patent',
                              fqn: 'respiratory.table.airway.patent',
                              inputType: 'checkbox',
                              label: 'Patent',
                              fieldset: 'airway',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'obstructed',
                              fqn: 'respiratory.table.airway.obstructed',
                              inputType: 'checkbox',
                              label: 'Obstructed',
                              fieldset: 'airway',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'oett',
                              fqn: 'respiratory.table.airway.oett',
                              inputType: 'checkbox',
                              label: 'OETT',
                              fieldset: 'airway',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'otherValue',
                              fqn: 'respiratory.table.airway.otherValue',
                              inputType: 'checkbox',
                              label: 'Other',
                              fieldset: 'airway',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'otherValue',
                              fqn: 'respiratory.table.airway.otherValue',
                              inputType: 'checkbox',
                              label: 'Other',
                              fieldset: 'airway',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'oxygenTherapy',
                              fqn: 'respiratory.table.airway.oxygenTherapy',
                              inputType: 'text',
                              label: 'Oxygen therapy',
                              fieldset: 'airway',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'oxygenFlow',
                              fqn: 'respiratory.table.airway.oxygenFlow',
                              inputType: 'textarea',
                              label: 'Oxygen flow',
                              fieldset: 'airway',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'breath',
                    fqn: 'respiratory.table.breath',
                    inputType: 'fieldset',
                    label: 'Breath sounds',
                    fieldset: 'breath',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    elements: [
                      {
                        elementKey: 'lul',
                        fqn: 'respiratory.table.breath.lul',
                        inputType: 'select',
                        label: 'LUL',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rul',
                        fqn: 'respiratory.table.breath.rul',
                        inputType: 'select',
                        label: 'RUL',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        inputType: 'label',
                        label: '-',
                        tableColumn: 'spacer',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rml',
                        fqn: 'respiratory.table.breath.rml',
                        inputType: 'select',
                        label: 'RML',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'lll',
                        fqn: 'respiratory.table.breath.lll',
                        inputType: 'select',
                        label: 'LLL',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rll',
                        fqn: 'respiratory.table.breath.rll',
                        inputType: 'select',
                        label: 'RLL',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'respiratoryRhythm',
                        fqn: 'respiratory.table.breath.respiratoryRhythm',
                        inputType: 'select',
                        label: 'Respiratory rhythm',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Regular'
                          },
                          {
                            text: 'Irregular'
                          },
                          {
                            text: 'Paradoxical'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'respiratoryDepth',
                        fqn: 'respiratory.table.breath.respiratoryDepth',
                        inputType: 'select',
                        label: 'Respiratory depth',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Shallow'
                          },
                          {
                            text: 'Deep'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'cough',
                        fqn: 'respiratory.table.breath.cough',
                        inputType: 'select',
                        label: 'Cough',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Nonreproductive'
                          },
                          {
                            text: 'Productive'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'sputumColour',
                        fqn: 'respiratory.table.breath.sputumColour',
                        inputType: 'select',
                        label: 'Sputum colour',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Mucoid'
                          },
                          {
                            text: 'Purulent'
                          },
                          {
                            text: 'Yellow-green'
                          },
                          {
                            text: 'Rust-coloured'
                          },
                          {
                            text: 'Pink, blood tinged'
                          },
                          {
                            text: 'Pink, frothy'
                          },
                          {
                            text: 'Profuse, colourless'
                          },
                          {
                            text: 'Bloody'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'sputumComments',
                        fqn: 'respiratory.table.breath.sputumComments',
                        inputType: 'text',
                        label: 'Sputum comments',
                        fieldset: 'breath',
                        fsetRow: '6',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'breath',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'lul',
                              fqn: 'respiratory.table.breath.lul',
                              inputType: 'select',
                              label: 'LUL',
                              fieldset: 'breath',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rul',
                              fqn: 'respiratory.table.breath.rul',
                              inputType: 'select',
                              label: 'RUL',
                              fieldset: 'breath',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              inputType: 'label',
                              label: '-',
                              tableColumn: 'spacer',
                              fieldset: 'breath',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rml',
                              fqn: 'respiratory.table.breath.rml',
                              inputType: 'select',
                              label: 'RML',
                              fieldset: 'breath',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'lll',
                              fqn: 'respiratory.table.breath.lll',
                              inputType: 'select',
                              label: 'LLL',
                              fieldset: 'breath',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rll',
                              fqn: 'respiratory.table.breath.rll',
                              inputType: 'select',
                              label: 'RLL',
                              fieldset: 'breath',
                              fsetRow: '3',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'respiratoryRhythm',
                              fqn: 'respiratory.table.breath.respiratoryRhythm',
                              inputType: 'select',
                              label: 'Respiratory rhythm',
                              fieldset: 'breath',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Regular'
                                },
                                {
                                  text: 'Irregular'
                                },
                                {
                                  text: 'Paradoxical'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'cough',
                              fqn: 'respiratory.table.breath.cough',
                              inputType: 'select',
                              label: 'Cough',
                              fieldset: 'breath',
                              fsetRow: '4',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'No'
                                },
                                {
                                  text: 'Nonreproductive'
                                },
                                {
                                  text: 'Productive'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'respiratoryDepth',
                              fqn: 'respiratory.table.breath.respiratoryDepth',
                              inputType: 'select',
                              label: 'Respiratory depth',
                              fieldset: 'breath',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Shallow'
                                },
                                {
                                  text: 'Deep'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'sputumColour',
                              fqn: 'respiratory.table.breath.sputumColour',
                              inputType: 'select',
                              label: 'Sputum colour',
                              fieldset: 'breath',
                              fsetRow: '5',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Mucoid'
                                },
                                {
                                  text: 'Purulent'
                                },
                                {
                                  text: 'Yellow-green'
                                },
                                {
                                  text: 'Rust-coloured'
                                },
                                {
                                  text: 'Pink, blood tinged'
                                },
                                {
                                  text: 'Pink, frothy'
                                },
                                {
                                  text: 'Profuse, colourless'
                                },
                                {
                                  text: 'Bloody'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'sputumComments',
                              fqn: 'respiratory.table.breath.sputumComments',
                              inputType: 'text',
                              label: 'Sputum comments',
                              fieldset: 'breath',
                              fsetRow: '6',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'generalComments',
                    fqn: 'respiratory.table.generalComments',
                    inputType: 'text',
                    label: 'General comments',
                    formCss: 'fullWidth',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    cardiovascular: {
      pageTitle: 'Assessments: Cardiovascular',
      pageDataKey: 'cardiovascular',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new cardiovascular assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'cardiovascular.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'is-3',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'cardiovascular.table.comments',
              inputType: 'text',
              label: 'Comments',
              fieldset: 'fullWidth',
              formColumn: '1',
              formRow: '8',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'cardiovascular.table.unit',
              inputType: 'text',
              label: 'Unit',
              formCss: 'is-2',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'cardiovascular.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'is-2',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'cardiovascular.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'is-2',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'pulse',
              fqn: 'cardiovascular.table.pulse',
              inputType: 'select',
              label: 'Pulse',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Irregular'
                },
                {
                  text: 'Normal'
                },
                {
                  text: 'Weak'
                },
                {
                  text: 'Bounding'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'skinAppearance',
              fqn: 'cardiovascular.table.skinAppearance',
              inputType: 'select',
              label: 'Skin appearance',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Pale'
                },
                {
                  text: 'Mottled'
                },
                {
                  text: 'Cyanotic'
                },
                {
                  text: 'Flushed'
                },
                {
                  text: 'Jaundiced'
                }
              ],
              tableKey: 'table'
            },
            {
              inputType: 'label',
              label: '-',
              formColumn: '1',
              formRow: '3',
              formOption: 'spacer',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              inputType: 'label',
              label: 'Cap refill',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Cap refill'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Temperature',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Temperature'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Peripheral edema',
              formColumn: '4',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Peripheral edema'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Nail bed colour',
              formColumn: '5',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Nail bed colour'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Right hand',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Right hand'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Left hand',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Left hand'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Right foot',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Right foot'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Left foot',
              formColumn: '1',
              formRow: '7',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Left foot'
                }
              ]
            },
            {
              elementKey: 'profession',
              fqn: 'cardiovascular.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'is-3',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillLeftHand',
              fqn: 'cardiovascular.table.capRefillLeftHand',
              inputType: 'select',
              label: 'Cap refill: Right foot',
              formColumn: '2',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillRightFoot',
              fqn: 'cardiovascular.table.capRefillRightFoot',
              inputType: 'select',
              label: 'Cap refill: Left foot',
              formColumn: '2',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillLeftFoot',
              fqn: 'cardiovascular.table.capRefillLeftFoot',
              inputType: 'select',
              label: 'Temperature: Right hand',
              formColumn: '2',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureRightHand',
              fqn: 'cardiovascular.table.temperatureRightHand',
              inputType: 'select',
              label: 'Temperature: Left hand',
              formColumn: '3',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureLeftHand',
              fqn: 'cardiovascular.table.temperatureLeftHand',
              inputType: 'select',
              label: 'Temperature: Right foot',
              formColumn: '3',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureRightFoot',
              fqn: 'cardiovascular.table.temperatureRightFoot',
              inputType: 'select',
              label: 'Temperature: Left foot',
              formColumn: '3',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureLeftFoot',
              fqn: 'cardiovascular.table.temperatureLeftFoot',
              inputType: 'select',
              label: 'Peripheral edema: Right hand',
              formColumn: '3',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaRightHand',
              fqn: 'cardiovascular.table.peripheralEdemaRightHand',
              inputType: 'select',
              label: 'Peripheral edema: Left hand',
              formColumn: '4',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaLeftHand',
              fqn: 'cardiovascular.table.peripheralEdemaLeftHand',
              inputType: 'select',
              label: 'Peripheral edema: Right foot',
              formColumn: '4',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaRightFoot',
              fqn: 'cardiovascular.table.peripheralEdemaRightFoot',
              inputType: 'select',
              label: 'Peripheral edema: Left foot',
              formColumn: '4',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaLeftFoot',
              fqn: 'cardiovascular.table.peripheralEdemaLeftFoot',
              inputType: 'select',
              label: 'Nail bed colour: Right hand',
              formColumn: '4',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourRightHand',
              fqn: 'cardiovascular.table.nailBedColourRightHand',
              inputType: 'select',
              label: 'Nail bed colour: Left hand',
              formColumn: '5',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourLeftHand',
              fqn: 'cardiovascular.table.nailBedColourLeftHand',
              inputType: 'select',
              label: 'Nail bed colour: Right Foot',
              formColumn: '5',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourRightFoot',
              fqn: 'cardiovascular.table.nailBedColourRightFoot',
              inputType: 'select',
              label: 'Nail bed colour: Left foot',
              formColumn: '5',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourLeftFoot',
              fqn: 'cardiovascular.table.nailBedColourLeftFoot',
              inputType: 'select',
              formColumn: '5',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillRightHand',
              fqn: 'cardiovascular.table.capRefillRightHand',
              inputType: 'select',
              label: 'Cap refill: Left hand',
              formColumn: '2',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'cardiovascular.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'is-3',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'cardiovascular.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'is-3',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'cardiovascular.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    formCss: 'is-2',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'cardiovascular.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'is-2',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'cardiovascular.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'is-2',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'pulse',
                    fqn: 'cardiovascular.table.pulse',
                    inputType: 'select',
                    label: 'Pulse',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Regular'
                      },
                      {
                        text: 'Irregular'
                      },
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Weak'
                      },
                      {
                        text: 'Bounding'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'skinAppearance',
                    fqn: 'cardiovascular.table.skinAppearance',
                    inputType: 'select',
                    label: 'Skin appearance',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Pale'
                      },
                      {
                        text: 'Mottled'
                      },
                      {
                        text: 'Cyanotic'
                      },
                      {
                        text: 'Flushed'
                      },
                      {
                        text: 'Jaundiced'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillRightHand',
                    fqn: 'cardiovascular.table.capRefillRightHand',
                    inputType: 'select',
                    label: 'Cap refill: Left hand',
                    formColumn: '2',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureRightHand',
                    fqn: 'cardiovascular.table.temperatureRightHand',
                    inputType: 'select',
                    label: 'Temperature: Left hand',
                    formColumn: '3',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaRightHand',
                    fqn: 'cardiovascular.table.peripheralEdemaRightHand',
                    inputType: 'select',
                    label: 'Peripheral edema: Left hand',
                    formColumn: '4',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourRightHand',
                    fqn: 'cardiovascular.table.nailBedColourRightHand',
                    inputType: 'select',
                    label: 'Nail bed colour: Left hand',
                    formColumn: '5',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillLeftHand',
                    fqn: 'cardiovascular.table.capRefillLeftHand',
                    inputType: 'select',
                    label: 'Cap refill: Right foot',
                    formColumn: '2',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureLeftHand',
                    fqn: 'cardiovascular.table.temperatureLeftHand',
                    inputType: 'select',
                    label: 'Temperature: Right foot',
                    formColumn: '3',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaLeftHand',
                    fqn: 'cardiovascular.table.peripheralEdemaLeftHand',
                    inputType: 'select',
                    label: 'Peripheral edema: Right foot',
                    formColumn: '4',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourLeftHand',
                    fqn: 'cardiovascular.table.nailBedColourLeftHand',
                    inputType: 'select',
                    label: 'Nail bed colour: Right Foot',
                    formColumn: '5',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '6',
                elements: [
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillRightFoot',
                    fqn: 'cardiovascular.table.capRefillRightFoot',
                    inputType: 'select',
                    label: 'Cap refill: Left foot',
                    formColumn: '2',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureRightFoot',
                    fqn: 'cardiovascular.table.temperatureRightFoot',
                    inputType: 'select',
                    label: 'Temperature: Left foot',
                    formColumn: '3',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaRightFoot',
                    fqn: 'cardiovascular.table.peripheralEdemaRightFoot',
                    inputType: 'select',
                    label: 'Peripheral edema: Left foot',
                    formColumn: '4',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourRightFoot',
                    fqn: 'cardiovascular.table.nailBedColourRightFoot',
                    inputType: 'select',
                    label: 'Nail bed colour: Left foot',
                    formColumn: '5',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '7',
                elements: [
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillLeftFoot',
                    fqn: 'cardiovascular.table.capRefillLeftFoot',
                    inputType: 'select',
                    label: 'Temperature: Right hand',
                    formColumn: '2',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureLeftFoot',
                    fqn: 'cardiovascular.table.temperatureLeftFoot',
                    inputType: 'select',
                    label: 'Peripheral edema: Right hand',
                    formColumn: '3',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaLeftFoot',
                    fqn: 'cardiovascular.table.peripheralEdemaLeftFoot',
                    inputType: 'select',
                    label: 'Nail bed colour: Right hand',
                    formColumn: '4',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourLeftFoot',
                    fqn: 'cardiovascular.table.nailBedColourLeftFoot',
                    inputType: 'select',
                    formColumn: '5',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '8',
                elements: [
                  {
                    elementKey: 'comments',
                    fqn: 'cardiovascular.table.comments',
                    inputType: 'text',
                    label: 'Comments',
                    fieldset: 'fullWidth',
                    formColumn: '1',
                    formRow: '8',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    gastrointestinal: {
      pageTitle: 'Assessments: Gastrointestinal',
      pageDataKey: 'gastrointestinal',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new gastrointestinal assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'gastrointestinal.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'is-3',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'emesis',
              fqn: 'gastrointestinal.table.emesis',
              inputType: 'fieldset',
              label: 'Emesis',
              fieldset: 'emesis',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              elements: [
                {
                  elementKey: 'none',
                  fqn: 'gastrointestinal.table.emesis.none',
                  inputType: 'select',
                  label: 'None',
                  fieldset: 'emesis',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.emesis',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Need'
                    },
                    {
                      text: 'Data'
                    },
                    {
                      text: 'Here'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              type: 'fieldset',
              containerKey: 'emesis',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'none',
                        fqn: 'gastrointestinal.table.emesis.none',
                        inputType: 'select',
                        label: 'None',
                        fieldset: 'emesis',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Need'
                          },
                          {
                            text: 'Data'
                          },
                          {
                            text: 'Here'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'unit',
              fqn: 'gastrointestinal.table.unit',
              inputType: 'text',
              label: 'Unit',
              formCss: 'is-2',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'gastrointestinal.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'is-2',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'gastrointestinal.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'is-2',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'soft',
              fqn: 'gastrointestinal.table.abdomen.soft',
              inputType: 'checkbox',
              label: 'Soft',
              fieldset: 'abdomen',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'tender',
              fqn: 'gastrointestinal.table.abdomen.tender',
              inputType: 'checkbox',
              label: 'Tender',
              fieldset: 'abdomen',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rigid',
              fqn: 'gastrointestinal.table.abdomen.rigid',
              inputType: 'checkbox',
              label: 'Rigid',
              fieldset: 'abdomen',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'profession',
              fqn: 'gastrointestinal.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'is-3',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'distended',
              fqn: 'gastrointestinal.table.abdomen.distended',
              inputType: 'checkbox',
              label: 'Distended',
              fieldset: 'abdomen',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'scars',
              fqn: 'gastrointestinal.table.abdomen.scars',
              inputType: 'checkbox',
              label: 'Scars',
              fieldset: 'abdomen',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pain',
              fqn: 'gastrointestinal.table.abdomen.pain',
              inputType: 'select',
              label: 'Abdominal pain',
              fieldset: 'abdomen',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              fqn: 'gastrointestinal.table.abdomen.',
              inputType: 'label',
              fieldset: 'abdomen',
              fsetRow: '8',
              fsetCol: '1',
              formOption: 'labelWithPageRef',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'If answered yes, please complete the pain assessent'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'abdomen',
              fqn: 'gastrointestinal.table.abdomen',
              inputType: 'fieldset',
              label: 'Abdomen',
              fieldset: 'abdomen',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              elements: [
                {
                  elementKey: 'soft',
                  fqn: 'gastrointestinal.table.abdomen.soft',
                  inputType: 'checkbox',
                  label: 'Soft',
                  fieldset: 'abdomen',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'tender',
                  fqn: 'gastrointestinal.table.abdomen.tender',
                  inputType: 'checkbox',
                  label: 'Tender',
                  fieldset: 'abdomen',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rigid',
                  fqn: 'gastrointestinal.table.abdomen.rigid',
                  inputType: 'checkbox',
                  label: 'Rigid',
                  fieldset: 'abdomen',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'guarding',
                  fqn: 'gastrointestinal.table.abdomen.guarding',
                  inputType: 'checkbox',
                  label: 'Guarding',
                  fieldset: 'abdomen',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'distended',
                  fqn: 'gastrointestinal.table.abdomen.distended',
                  inputType: 'checkbox',
                  label: 'Distended',
                  fieldset: 'abdomen',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'scars',
                  fqn: 'gastrointestinal.table.abdomen.scars',
                  inputType: 'checkbox',
                  label: 'Scars',
                  fieldset: 'abdomen',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'pain',
                  fqn: 'gastrointestinal.table.abdomen.pain',
                  inputType: 'select',
                  label: 'Abdominal pain',
                  fieldset: 'abdomen',
                  fsetRow: '7',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Yes'
                    },
                    {
                      text: 'No'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  fqn: 'gastrointestinal.table.abdomen.',
                  inputType: 'label',
                  fieldset: 'abdomen',
                  fsetRow: '8',
                  fsetCol: '1',
                  formOption: 'labelWithPageRef',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'If answered yes, please complete the pain assessent'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              type: 'fieldset',
              containerKey: 'abdomen',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'soft',
                        fqn: 'gastrointestinal.table.abdomen.soft',
                        inputType: 'checkbox',
                        label: 'Soft',
                        fieldset: 'abdomen',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'tender',
                        fqn: 'gastrointestinal.table.abdomen.tender',
                        inputType: 'checkbox',
                        label: 'Tender',
                        fieldset: 'abdomen',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'rigid',
                        fqn: 'gastrointestinal.table.abdomen.rigid',
                        inputType: 'checkbox',
                        label: 'Rigid',
                        fieldset: 'abdomen',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'guarding',
                        fqn: 'gastrointestinal.table.abdomen.guarding',
                        inputType: 'checkbox',
                        label: 'Guarding',
                        fieldset: 'abdomen',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'distended',
                        fqn: 'gastrointestinal.table.abdomen.distended',
                        inputType: 'checkbox',
                        label: 'Distended',
                        fieldset: 'abdomen',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'scars',
                        fqn: 'gastrointestinal.table.abdomen.scars',
                        inputType: 'checkbox',
                        label: 'Scars',
                        fieldset: 'abdomen',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'pain',
                        fqn: 'gastrointestinal.table.abdomen.pain',
                        inputType: 'select',
                        label: 'Abdominal pain',
                        fieldset: 'abdomen',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'No'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '8',
                    elements: [
                      {
                        fqn: 'gastrointestinal.table.abdomen.',
                        inputType: 'label',
                        fieldset: 'abdomen',
                        fsetRow: '8',
                        fsetCol: '1',
                        formOption: 'labelWithPageRef',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'If answered yes, please complete the pain assessent'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'none',
              fqn: 'gastrointestinal.table.emesis.none',
              inputType: 'select',
              label: 'None',
              fieldset: 'emesis',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Need'
                },
                {
                  text: 'Data'
                },
                {
                  text: 'Here'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'guarding',
              fqn: 'gastrointestinal.table.abdomen.guarding',
              inputType: 'checkbox',
              label: 'Guarding',
              fieldset: 'abdomen',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'gastrointestinal.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'is-3',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'gastrointestinal.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'is-3',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'gastrointestinal.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    formCss: 'is-2',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'gastrointestinal.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'is-2',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'gastrointestinal.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'is-2',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'abdomen',
                    fqn: 'gastrointestinal.table.abdomen',
                    inputType: 'fieldset',
                    label: 'Abdomen',
                    fieldset: 'abdomen',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    elements: [
                      {
                        elementKey: 'soft',
                        fqn: 'gastrointestinal.table.abdomen.soft',
                        inputType: 'checkbox',
                        label: 'Soft',
                        fieldset: 'abdomen',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'tender',
                        fqn: 'gastrointestinal.table.abdomen.tender',
                        inputType: 'checkbox',
                        label: 'Tender',
                        fieldset: 'abdomen',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rigid',
                        fqn: 'gastrointestinal.table.abdomen.rigid',
                        inputType: 'checkbox',
                        label: 'Rigid',
                        fieldset: 'abdomen',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'guarding',
                        fqn: 'gastrointestinal.table.abdomen.guarding',
                        inputType: 'checkbox',
                        label: 'Guarding',
                        fieldset: 'abdomen',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'distended',
                        fqn: 'gastrointestinal.table.abdomen.distended',
                        inputType: 'checkbox',
                        label: 'Distended',
                        fieldset: 'abdomen',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'scars',
                        fqn: 'gastrointestinal.table.abdomen.scars',
                        inputType: 'checkbox',
                        label: 'Scars',
                        fieldset: 'abdomen',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'pain',
                        fqn: 'gastrointestinal.table.abdomen.pain',
                        inputType: 'select',
                        label: 'Abdominal pain',
                        fieldset: 'abdomen',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'No'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        fqn: 'gastrointestinal.table.abdomen.',
                        inputType: 'label',
                        fieldset: 'abdomen',
                        fsetRow: '8',
                        fsetCol: '1',
                        formOption: 'labelWithPageRef',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'If answered yes, please complete the pain assessent'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'abdomen',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'soft',
                              fqn: 'gastrointestinal.table.abdomen.soft',
                              inputType: 'checkbox',
                              label: 'Soft',
                              fieldset: 'abdomen',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'tender',
                              fqn: 'gastrointestinal.table.abdomen.tender',
                              inputType: 'checkbox',
                              label: 'Tender',
                              fieldset: 'abdomen',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'rigid',
                              fqn: 'gastrointestinal.table.abdomen.rigid',
                              inputType: 'checkbox',
                              label: 'Rigid',
                              fieldset: 'abdomen',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'guarding',
                              fqn: 'gastrointestinal.table.abdomen.guarding',
                              inputType: 'checkbox',
                              label: 'Guarding',
                              fieldset: 'abdomen',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'distended',
                              fqn: 'gastrointestinal.table.abdomen.distended',
                              inputType: 'checkbox',
                              label: 'Distended',
                              fieldset: 'abdomen',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'scars',
                              fqn: 'gastrointestinal.table.abdomen.scars',
                              inputType: 'checkbox',
                              label: 'Scars',
                              fieldset: 'abdomen',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'pain',
                              fqn: 'gastrointestinal.table.abdomen.pain',
                              inputType: 'select',
                              label: 'Abdominal pain',
                              fieldset: 'abdomen',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'No'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '8',
                          elements: [
                            {
                              fqn: 'gastrointestinal.table.abdomen.',
                              inputType: 'label',
                              fieldset: 'abdomen',
                              fsetRow: '8',
                              fsetCol: '1',
                              formOption: 'labelWithPageRef',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'If answered yes, please complete the pain assessent'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'emesis',
                    fqn: 'gastrointestinal.table.emesis',
                    inputType: 'fieldset',
                    label: 'Emesis',
                    fieldset: 'emesis',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    elements: [
                      {
                        elementKey: 'none',
                        fqn: 'gastrointestinal.table.emesis.none',
                        inputType: 'select',
                        label: 'None',
                        fieldset: 'emesis',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Need'
                          },
                          {
                            text: 'Data'
                          },
                          {
                            text: 'Here'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    type: 'fieldset',
                    containerKey: 'emesis',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'none',
                              fqn: 'gastrointestinal.table.emesis.none',
                              inputType: 'select',
                              label: 'None',
                              fieldset: 'emesis',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Need'
                                },
                                {
                                  text: 'Data'
                                },
                                {
                                  text: 'Here'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    }
  }
}
