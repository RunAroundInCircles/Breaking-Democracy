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

            LoadInFile(pathToEventList, "Events");
            LoadInFile(pathToSituationsList, "Situations");
            LoadInFile(pathToEchosList, "Echos");
            LoadInFile(pathToEmailsList, "Emails");


        }


        /// <summary>
        /// When given a path it will load the file into the associated tab.
        /// </summary>
        /// <param name="path">Path to String</param>
        ///  <param name="NameOfTab">Name of the tab that needs the file</param>
        private void LoadInFile(string path, string NameOfTab)
        {
            using (StreamReader sr = new StreamReader(path))
            {
                string line = "";

                while ((line = sr.ReadLine()) != null)
                {
                    int index = line.IndexOf("{");
                    if (index > 0)
                    {
                        line = line.Substring(line.IndexOf('{') + 1); //Makes sure the line starts with the first { there are some cases where an ID starts with extra data in the beginning.
                        if(line.IndexOf('}') > 0)
                        {
                            line = line.Substring(0, line.IndexOf('}'));
                        }
                        
                        string[] variables = line.Split(',');

                        foreach(string pair in variables)
                        {
                            Console.WriteLine(pair);
                        }

                    }
                        
                }

            }
        }
    }
}
