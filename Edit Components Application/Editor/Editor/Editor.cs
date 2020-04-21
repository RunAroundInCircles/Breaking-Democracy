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
            LoadInFile(pathToEventList, uxEventList);
            LoadInFile(pathToSituationsList, uxSituationsList);
            LoadInFile(pathToEchosList, uxEchosList);
            LoadInFile(pathToEmailsList, uxEmailList);

        }


        /// <summary>
        /// When given a path it will load the file into the associated tab.
        /// </summary>
        /// <param name="path">Path to String</param>
        ///  <param name="NameOfTab">Name of the tab that needs the file</param>
        private void LoadInFile(string path, System.Windows.Forms.DataGridView grid)
        {
            using (StreamReader sr = new StreamReader(path)) // Opens the JSON File
            {
                JsonReader jr = new JsonTextReader(sr); // Reads through the JSON File
                string[] pair = new string[2]; //Holds the name of the variable and the value of the variable
                int variableCounts = 0;
                int lineCounts = 0;
                string[] newRow = new string[grid.Columns.Count];
                int cellCount = 0;

                while (jr.Read())
                {
                    lineCounts++;
                    if (jr.Value != null)
                    {
                        
                        pair[variableCounts % 2] = jr.Value.ToString();
                        
                        if ((variableCounts % 2) != 0)
                        {
                            newRow[cellCount] = pair[1];

                            if(cellCount == newRow.Length - 1)
                            {
                                cellCount = 0;
                                grid.Rows.Add(newRow);
                                
                            }
                            else
                            {
                                cellCount++;
                            }
                            
                            
                        }
                        variableCounts++;
                        Console.WriteLine(jr.Value.ToString());
                    }

                    
                }
                Console.WriteLine(pair[0] + " : " + pair[1]);


            }
        }
    }
}
