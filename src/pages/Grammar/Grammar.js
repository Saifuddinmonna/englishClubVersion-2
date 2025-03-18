import React from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Grammar() {
  const grammarSections = [
    {
      title: 'Auxiliary Verbs',
      content: {
        introduction: 'Auxiliary verbs help the main verb to form Tense, Voice, and Mood. They support the Principal Verb in sentence formation.',
        types: [
          {
            name: 'Primary Auxiliaries',
            description: 'Also known as Tense Auxiliaries, these can be used both as main verbs and helping verbs.',
            verbs: [
              {
                base: 'Be',
                present: 'Am, is, are',
                past: 'Was, were',
                pastParticiple: 'Been',
                ing: 'Being',
                usage: 'Used for continuous tenses'
              },
              {
                base: 'Have',
                present: 'Have, has',
                past: 'Had',
                pastParticiple: 'Had',
                ing: 'Having',
                usage: 'Used for perfect tenses'
              },
              {
                base: 'Do',
                present: 'Do, does',
                past: 'Did',
                pastParticiple: 'Done',
                ing: 'Doing',
                usage: 'Used for negative and interrogative sentences'
              }
            ]
          },
          {
            name: 'Modal Auxiliaries',
            description: 'Used to express mood or manner of the action',
            verbs: [
              'Will', 'Shall', 'Would', 'Should', 'Can', 'Could',
              'May', 'Might', 'Must', "Mustn't", 'Ought to',
              'Have to / Has to', "Don't / Doesn't have to", 'Need'
            ]
          }
        ]
      }
    },
    {
      title: 'Sentences',
      content: {
        introduction: 'A sentence is a group of words that makes complete sense. Understanding different types of sentences is crucial for effective communication.',
        types: [
          {
            name: 'Simple Sentence',
            description: 'Contains one independent clause',
            example: 'I love English.'
          },
          {
            name: 'Compound Sentence',
            description: 'Contains two or more independent clauses joined by coordinating conjunctions',
            example: 'I love English, and I study it every day.'
          },
          {
            name: 'Complex Sentence',
            description: 'Contains one independent clause and one or more dependent clauses',
            example: 'When I study English, I feel happy.'
          },
          {
            name: 'Compound-Complex Sentence',
            description: 'Contains two or more independent clauses and one or more dependent clauses',
            example: 'When I study English, I feel happy, and my knowledge improves.'
          }
        ]
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">English Grammar</h1>
      <div className="w-full px-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {grammarSections.map((section) => (
              <Tab
                key={section.title}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow text-blue-700'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {section.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {/* Auxiliary Verbs Panel */}
            <Tab.Panel className="rounded-xl bg-white p-3">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{grammarSections[0].title}</h2>
                  <p className="text-gray-600 mb-6">{grammarSections[0].content.introduction}</p>
                  
                  {grammarSections[0].content.types.map((type) => (
                    <div key={type.name} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{type.name}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      
                      {type.verbs && Array.isArray(type.verbs) && !type.verbs[0]?.base ? (
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {type.verbs.map((verb) => (
                            <li key={verb} className="bg-gray-50 p-3 rounded-lg">{verb}</li>
                          ))}
                        </ul>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Form</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Past</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Past Participle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">-ing Form</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {type.verbs.map((verb) => (
                                <tr key={verb.base}>
                                  <td className="px-6 py-4 whitespace-nowrap">{verb.base}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{verb.present}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{verb.past}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{verb.pastParticiple}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{verb.ing}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{verb.usage}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Panel>

            {/* Sentences Panel */}
            <Tab.Panel className="rounded-xl bg-white p-3">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{grammarSections[1].title}</h2>
                  <p className="text-gray-600 mb-6">{grammarSections[1].content.introduction}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {grammarSections[1].content.types.map((type) => (
                      <div key={type.name} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="bg-white p-4 rounded-md border border-gray-200">
                          <p className="text-blue-600 italic">{type.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
} 