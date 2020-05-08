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
            string pathToEventList = "../../application/src/Components/Calendar/EventList.json";
            string pathToSituationsList = "../../application/src/Components/Calendar/Situations.json";
            string pathToEchosList = "../../application/src/Components/Echo/echo.json";
            string pathToEmailsList = "../../application/src/Components/Email/EmailList.json";
            string pathToQuizQuestions = "../../application/src/Components/Calendar/VideoGame/TypeType/codingChallenges.json";

            string[] paths = { pathToEventList, pathToSituationsList, pathToEchosList, pathToEmailsList, pathToQuizQuestions };

            Assert.IsTrue(editor.checkFiles(paths));
        }

        /// <summary>
        /// Checks to see if a file that does not exist does not exist
        /// </summary>
        [TestMethod]
        public void CheckFilePathsThatDontExist()
        {
            //Creates an instance of the editor
            var editor = new uxEditor();

            //Provides a path that does not exist
            string badPath = "../DoesNotExist";

            string[] paths = { badPath };

            Assert.IsFalse(editor.checkFiles(paths));
        }

        /// <summary>
        /// Checks to see if saving data to a file works.
        /// </summary>
        [TestMethod]
        public void CheckSavingFiles()
        {
            //Creates an instance of the editor
            var editor = new uxEditor();
            //Creates a Builder with sample text
            StringBuilder sb = new StringBuilder("Test if file can be saved.");
            string path = "./testFile.txt"; //Path to temporary test file

            //If test file does not exist
            if (!File.Exists(path))
            {
                //Create the text file. 
                //We also want to dispose of the stream reader created properly by running this with the using keyword.
                using (File.CreateText(path));
     
            }

            //Use the test method
            editor.SaveFile(sb, path);

            string results = "";

            //Read through file
            using(StreamReader sr = new StreamReader(path))
            {
                //Loops through until the end of the file
                while (!sr.EndOfStream)
                {
                    //Reads in the results
                    results = results + sr.ReadLine();
                }
            }

            //Checks to see if the results from the file are the same as the data written in.
            Assert.AreEqual(sb.ToString(), results);

            //Make sure the test file wasn't deleted during the test
            if (File.Exists(path))
            {
                //Deletes the temporary file.
                File.Delete(path);
            }

        }


        /// <summary>
        /// Checks to see if the desktop image can be replaced correctly
        /// </summary>
        [TestMethod]
        public void CheckReplacingFile()
        {
            // Creates an instance of the editor
            var editor = new uxEditor();

            // The test image
            string pathToTestImage = "../../application/src/Resources/test_background.png";

            // The path to the desktop image
            string pathToOriginal = "../../application/src/Resources/Title_Computer.png";

            // The path to the backup image
            string backup = "../../application/src/Resources/backup_of_desktop.png";
            string testbackup = "../../application/src/Resources/test_backup.png";

            // Checks to see if all the paths exist
            if (File.Exists(pathToTestImage) && File.Exists(pathToOriginal) && File.Exists(backup))
            {
                // Attempts to change the desktop image (Note: I have made the original method to take in all 3 paths
                // because testing only allows access to paths that have an extra ../
                // To counteract this I created 3 new arguments  to the method
                Assert.IsTrue(editor.UpdateDesktopImage(pathToTestImage,pathToOriginal,backup));

                // If the change was success change the desktop image back to the original. 
                editor.UpdateDesktopImage(backup, pathToOriginal, testbackup);

                // Make sure the test file was not deleted during the test
                if (File.Exists(testbackup))
                {
                    File.Delete(testbackup);
                }
               
            }
            else
            {
                // If the test files cannot be found fail the test
                Assert.Fail();
            }
            
        }

    }
}
