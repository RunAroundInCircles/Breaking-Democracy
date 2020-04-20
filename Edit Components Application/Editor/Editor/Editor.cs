using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

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
        }
    }
}
