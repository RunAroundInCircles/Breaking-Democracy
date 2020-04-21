/*MIT License

Copyright (c) 2019 Caleb Logan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using Newtonsoft.Json;

namespace Editor
{
    public partial class uxEditor : Form
    {
        public uxEditor()
        {
            InitializeComponent();
        }

        /// <summary>
        /// On load we need to import every JSON file used in the project to allow the user to edit the files.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Editor_Load(object sender, EventArgs e)
        {
            //The paths to all the jsons used in Grand Theft Democracy
            string pathToEventList = "../application/src/Components/Calendar/EventList.json";
            string pathToSituationsList = "../application/src/Components/Calendar/Situations.json";
            string pathToEchosList = "../application/src/Components/Echo/echo.json";
            string pathToEmailsList = "../application/src/Components/Email/EmailList.json";

            //Loads in the files into the editor

            //First we load in JSONs that have arrays
            LoadInFileArray(pathToEventList, uxEventList);
            LoadInFileArray(pathToSituationsList, uxSituationsList);

            //New load in JSONs that do not use arrays.
            LoadInFileWithoutArray(pathToEchosList, uxEchosList);
            LoadInFileWithoutArray(pathToEmailsList, uxEmailList);

        }


        /// <summary>
        /// When given a path it will load the file into the associated tab.
        /// </summary>
        /// <param name="path">Path to String</param>
        ///  <param name="NameOfTab">Name of the tab that needs the file</param>
        private void LoadInFileWithoutArray(string path, System.Windows.Forms.DataGridView grid)
        {
            using (StreamReader sr = new StreamReader(path)) // Opens the JSON File
            {
                JsonReader jr = new JsonTextReader(sr); // Reads through the JSON File
                string[] pair = new string[2]; //Holds the name of the variable and the value of the variable
                int variableCounts = 0;
                string[] newRow = new string[grid.Columns.Count];
                int cellCount = 0;

                //Reads in the JSON File
                while (jr.Read())
                {
                    if (jr.Value != null)
                    {
                        
                        pair[variableCounts % 2] = jr.Value.ToString(); //Either the variable name or the data in the variable
                        
                        //We look at only the variable data
                        if ((variableCounts % 2) != 0)
                        {
                            
                            //Add the data to the row
                            newRow[cellCount] = pair[1];

                            //Check to see if we are at the end of the row
                            if(cellCount == newRow.Length - 1)
                            {
                                //Reset the cell counter
                                cellCount = 0;

                                //Add row to the data grid view
                                grid.Rows.Add(newRow);
                                
                            }
                            else
                            {
                                //Keep moving through the cells of the row
                                cellCount++;
                            }
                            
                            
                        }
                        variableCounts++;
                    }

                }

            }
        }



        private void LoadInFileArray(string path, System.Windows.Forms.DataGridView grid)
        {
            using (StreamReader sr = new StreamReader(path)) // Opens the JSON File
            {
                JsonReader jr = new JsonTextReader(sr); // Reads through the JSON File
                string[] pair = new string[2]; //Holds the name of the variable and the value of the variable
                int variableCounts = 0; //Counts each variable coming in from the JSON
                string[] newRow = new string[grid.Columns.Count]; //The Row that is being read in from the JSON
                int cellCount = 0; //Counts the number of cells in the row.

                while (jr.Read())
                {
                    if (jr.Value != null)
                    {
                        if (cellCount == 0) //We are reading in the array index.
                        {
                            newRow[cellCount] = jr.Value.ToString(); //Adds the array index to the row
                            cellCount++;
                        }
                        else
                        {
                            pair[(variableCounts) % 2] = jr.Value.ToString(); //This reads in either the variable name or the actual value.

                            //Checks only the value of the variable
                            if (((variableCounts) % 2) != 0)
                            {
                                //Adds the value from the variable to the row.
                                newRow[cellCount] = pair[1];

                                //Checks to see if we have gone through all the variables in the row.
                                if (cellCount == newRow.Length - 1)
                                {
                                    //Reset cell counter
                                    cellCount = 0;
                                    //Add the row to the data grid
                                    grid.Rows.Add(newRow);

                                }
                                else
                                {
                                    //Keep Proceeding through cells
                                    cellCount++;
                                }


                            }
                            //Move on to the next variable to be read in
                            variableCounts++;
                        }
                    }


                }


            }
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            System.Windows.Forms.DataGridView grid = uxEventList; //The grid we need to save

            //We need to find the correct Data grid to save
            switch (uxTabs.SelectedIndex)
            {
                case 0: // Events
                    grid = uxEventList;
                    break;
                case 1: // Situations
                    grid = uxSituationsList;
                    break;
                case 2: // Echos
                    grid = uxEchosList;
                    break;
                case 3: // Email
                    grid = uxEmailList;
                    break;
            }





            StringBuilder sb = new StringBuilder();
            StringWriter sw = new StringWriter(sb);

            using(JsonWriter writer = new JsonTextWriter(sw))
            {
                writer.Formatting = Formatting.Indented;

                foreach (DataGridViewRow row in grid.Rows)
                {
                    

                    
                   foreach(DataGridViewCell cell in row.Cells)
                    {
                        if ((grid == uxEventList || grid == uxSituationsList) && cell.ColumnIndex == 0)
                        {
                            writer.WritePropertyName(cell.Value.ToString());
                            writer.WriteStartArray();
                        }

                        writer.WriteStartObject();
                        writer.WritePropertyName(grid.Columns[cell.ColumnIndex].HeaderText);
                        if(cell.Value != null)
                        {
                            Console.WriteLine(cell.Value.ToString());
                            writer.WriteValue(cell.Value);
                        }
                        
                    }

                    writer.WriteEnd();
                    writer.WriteEndObject();

                    if (grid == uxEventList || grid == uxSituationsList)
                    {
                        writer.WriteEndArray();
                    }
                }

            }


        }
    }

}


