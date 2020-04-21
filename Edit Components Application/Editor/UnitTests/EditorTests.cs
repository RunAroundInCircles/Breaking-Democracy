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
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using Editor;

namespace UnitTests
{
    [TestClass]
    public class EditorTests : Form
    {

        /// <summary>
        /// Tests to see if all the file paths are correct
        /// </summary>
        [TestMethod]
        public void CheckIfFilePathsExists()
        {
            var editor = new uxEditor();
            
            //The paths to all the jsons used in Grand Theft Democracy
            string pathToEventList = "../application/src/Components/Calendar/EventList.json";
            string pathToSituationsList = "../application/src/Components/Calendar/Situations.json";
            string pathToEchosList = "../application/src/Components/Echo/echo.json";
            string pathToEmailsList = "../application/src/Components/Email/EmailList.json";

            string[] paths = { pathToEventList, pathToSituationsList, pathToEchosList, pathToEmailsList };

            Assert.IsTrue(editor.checkFiles(paths));
        }

        /// <summary>
        /// Checks to see if a file that does not exist does not exist
        /// </summary>
        [TestMethod]
        public void CheckFilePathsThatDontExist()
        {
            var editor = new uxEditor();
            string badPath = "../DoesNotExist";

            string[] paths = { badPath };

            Assert.IsFalse(editor.checkFiles(paths));
        }
    }
}
