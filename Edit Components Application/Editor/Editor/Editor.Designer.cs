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
namespace Editor
{
    partial class uxEditor
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.uxEventNameTab = new System.Windows.Forms.TabControl();
            this.uxEventTab = new System.Windows.Forms.TabPage();
            this.uxEventList = new System.Windows.Forms.DataGridView();
            this.uxSituationsTab = new System.Windows.Forms.TabPage();
            this.uxSituationsList = new System.Windows.Forms.DataGridView();
            this.uxEchoTab = new System.Windows.Forms.TabPage();
            this.uxEchosList = new System.Windows.Forms.DataGridView();
            this.echoBody = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.echoName = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.echoAt = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.echoTime = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uxEmailTab = new System.Windows.Forms.TabPage();
            this.uxEmailList = new System.Windows.Forms.DataGridView();
            this.btnSave = new System.Windows.Forms.Button();
            this.emailCurrentSprint = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailSender = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailAddress = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailccs = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailTitle = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailFavorited = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailPinned = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailID = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.emailbody = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.eventArrayIndex = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.eventID = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.day = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.month = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.eventYear = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.message = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.SituationsArrayIndex = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.situationID = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.situation = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.situationChoice1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.situationChoice2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uxEventNameTab.SuspendLayout();
            this.uxEventTab.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.uxEventList)).BeginInit();
            this.uxSituationsTab.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.uxSituationsList)).BeginInit();
            this.uxEchoTab.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.uxEchosList)).BeginInit();
            this.uxEmailTab.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.uxEmailList)).BeginInit();
            this.SuspendLayout();
            // 
            // uxEventNameTab
            // 
            this.uxEventNameTab.Controls.Add(this.uxEventTab);
            this.uxEventNameTab.Controls.Add(this.uxSituationsTab);
            this.uxEventNameTab.Controls.Add(this.uxEchoTab);
            this.uxEventNameTab.Controls.Add(this.uxEmailTab);
            this.uxEventNameTab.Location = new System.Drawing.Point(12, 12);
            this.uxEventNameTab.Name = "uxEventNameTab";
            this.uxEventNameTab.SelectedIndex = 0;
            this.uxEventNameTab.Size = new System.Drawing.Size(886, 426);
            this.uxEventNameTab.TabIndex = 0;
            // 
            // uxEventTab
            // 
            this.uxEventTab.Controls.Add(this.uxEventList);
            this.uxEventTab.Location = new System.Drawing.Point(4, 25);
            this.uxEventTab.Name = "uxEventTab";
            this.uxEventTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxEventTab.Size = new System.Drawing.Size(878, 397);
            this.uxEventTab.TabIndex = 0;
            this.uxEventTab.Text = "Events";
            this.uxEventTab.UseVisualStyleBackColor = true;
            // 
            // uxEventList
            // 
            this.uxEventList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxEventList.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.eventArrayIndex,
            this.eventID,
            this.day,
            this.month,
            this.eventYear,
            this.message});
            this.uxEventList.Location = new System.Drawing.Point(-4, 0);
            this.uxEventList.Name = "uxEventList";
            this.uxEventList.RowTemplate.Height = 24;
            this.uxEventList.Size = new System.Drawing.Size(879, 401);
            this.uxEventList.TabIndex = 0;
            // 
            // uxSituationsTab
            // 
            this.uxSituationsTab.Controls.Add(this.uxSituationsList);
            this.uxSituationsTab.Location = new System.Drawing.Point(4, 25);
            this.uxSituationsTab.Name = "uxSituationsTab";
            this.uxSituationsTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxSituationsTab.Size = new System.Drawing.Size(878, 397);
            this.uxSituationsTab.TabIndex = 1;
            this.uxSituationsTab.Text = "Situations";
            this.uxSituationsTab.UseVisualStyleBackColor = true;
            // 
            // uxSituationsList
            // 
            this.uxSituationsList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxSituationsList.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.SituationsArrayIndex,
            this.situationID,
            this.situation,
            this.situationChoice1,
            this.situationChoice2});
            this.uxSituationsList.Location = new System.Drawing.Point(0, 3);
            this.uxSituationsList.Name = "uxSituationsList";
            this.uxSituationsList.RowTemplate.Height = 24;
            this.uxSituationsList.Size = new System.Drawing.Size(875, 394);
            this.uxSituationsList.TabIndex = 0;
            // 
            // uxEchoTab
            // 
            this.uxEchoTab.Controls.Add(this.uxEchosList);
            this.uxEchoTab.Location = new System.Drawing.Point(4, 25);
            this.uxEchoTab.Name = "uxEchoTab";
            this.uxEchoTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxEchoTab.Size = new System.Drawing.Size(878, 397);
            this.uxEchoTab.TabIndex = 2;
            this.uxEchoTab.Text = "Echos";
            this.uxEchoTab.UseVisualStyleBackColor = true;
            // 
            // uxEchosList
            // 
            this.uxEchosList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxEchosList.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.echoBody,
            this.echoName,
            this.echoAt,
            this.echoTime});
            this.uxEchosList.Location = new System.Drawing.Point(0, 0);
            this.uxEchosList.Name = "uxEchosList";
            this.uxEchosList.RowTemplate.Height = 24;
            this.uxEchosList.Size = new System.Drawing.Size(878, 397);
            this.uxEchosList.TabIndex = 0;
            // 
            // echoBody
            // 
            this.echoBody.HeaderText = "body";
            this.echoBody.Name = "echoBody";
            // 
            // echoName
            // 
            this.echoName.HeaderText = "name";
            this.echoName.Name = "echoName";
            // 
            // echoAt
            // 
            this.echoAt.HeaderText = "at";
            this.echoAt.Name = "echoAt";
            // 
            // echoTime
            // 
            this.echoTime.HeaderText = "time";
            this.echoTime.Name = "echoTime";
            // 
            // uxEmailTab
            // 
            this.uxEmailTab.Controls.Add(this.uxEmailList);
            this.uxEmailTab.Location = new System.Drawing.Point(4, 25);
            this.uxEmailTab.Name = "uxEmailTab";
            this.uxEmailTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxEmailTab.Size = new System.Drawing.Size(878, 397);
            this.uxEmailTab.TabIndex = 3;
            this.uxEmailTab.Text = "Email";
            this.uxEmailTab.UseVisualStyleBackColor = true;
            // 
            // uxEmailList
            // 
            this.uxEmailList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxEmailList.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.emailCurrentSprint,
            this.emailSender,
            this.emailAddress,
            this.emailccs,
            this.emailTitle,
            this.emailFavorited,
            this.emailPinned,
            this.emailID,
            this.emailbody});
            this.uxEmailList.Location = new System.Drawing.Point(-4, 0);
            this.uxEmailList.Name = "uxEmailList";
            this.uxEmailList.RowTemplate.Height = 24;
            this.uxEmailList.Size = new System.Drawing.Size(882, 401);
            this.uxEmailList.TabIndex = 0;
            // 
            // btnSave
            // 
            this.btnSave.Location = new System.Drawing.Point(748, 444);
            this.btnSave.Name = "btnSave";
            this.btnSave.Size = new System.Drawing.Size(150, 26);
            this.btnSave.TabIndex = 1;
            this.btnSave.Text = "Save";
            this.btnSave.UseVisualStyleBackColor = true;
            // 
            // emailCurrentSprint
            // 
            this.emailCurrentSprint.HeaderText = "currentSprint";
            this.emailCurrentSprint.Name = "emailCurrentSprint";
            // 
            // emailSender
            // 
            this.emailSender.HeaderText = "sender";
            this.emailSender.Name = "emailSender";
            // 
            // emailAddress
            // 
            this.emailAddress.HeaderText = "senderEmail";
            this.emailAddress.Name = "emailAddress";
            // 
            // emailccs
            // 
            this.emailccs.HeaderText = "ccsEmail";
            this.emailccs.Name = "emailccs";
            // 
            // emailTitle
            // 
            this.emailTitle.HeaderText = "title";
            this.emailTitle.Name = "emailTitle";
            // 
            // emailFavorited
            // 
            this.emailFavorited.HeaderText = "favorited";
            this.emailFavorited.Name = "emailFavorited";
            // 
            // emailPinned
            // 
            this.emailPinned.HeaderText = "pinned";
            this.emailPinned.Name = "emailPinned";
            // 
            // emailID
            // 
            this.emailID.HeaderText = "id";
            this.emailID.Name = "emailID";
            // 
            // emailbody
            // 
            this.emailbody.HeaderText = "body";
            this.emailbody.Name = "emailbody";
            // 
            // eventArrayIndex
            // 
            this.eventArrayIndex.HeaderText = "eventArrayIndex";
            this.eventArrayIndex.Name = "eventArrayIndex";
            this.eventArrayIndex.Visible = false;
            // 
            // eventID
            // 
            this.eventID.HeaderText = "id";
            this.eventID.Name = "eventID";
            // 
            // day
            // 
            this.day.HeaderText = "day";
            this.day.Name = "day";
            // 
            // month
            // 
            this.month.HeaderText = "month";
            this.month.Name = "month";
            // 
            // eventYear
            // 
            this.eventYear.HeaderText = "year";
            this.eventYear.Name = "eventYear";
            // 
            // message
            // 
            this.message.HeaderText = "message";
            this.message.Name = "message";
            // 
            // SituationsArrayIndex
            // 
            this.SituationsArrayIndex.HeaderText = "Situations Array Index";
            this.SituationsArrayIndex.Name = "SituationsArrayIndex";
            this.SituationsArrayIndex.Visible = false;
            // 
            // situationID
            // 
            this.situationID.HeaderText = "id";
            this.situationID.Name = "situationID";
            // 
            // situation
            // 
            this.situation.HeaderText = "situation";
            this.situation.Name = "situation";
            // 
            // situationChoice1
            // 
            this.situationChoice1.HeaderText = "choice 1";
            this.situationChoice1.Name = "situationChoice1";
            // 
            // situationChoice2
            // 
            this.situationChoice2.HeaderText = "choice 2";
            this.situationChoice2.Name = "situationChoice2";
            // 
            // uxEditor
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(920, 482);
            this.Controls.Add(this.btnSave);
            this.Controls.Add(this.uxEventNameTab);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Name = "uxEditor";
            this.Text = "Editor";
            this.Load += new System.EventHandler(this.Editor_Load);
            this.uxEventNameTab.ResumeLayout(false);
            this.uxEventTab.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.uxEventList)).EndInit();
            this.uxSituationsTab.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.uxSituationsList)).EndInit();
            this.uxEchoTab.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.uxEchosList)).EndInit();
            this.uxEmailTab.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.uxEmailList)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TabControl uxEventNameTab;
        private System.Windows.Forms.TabPage uxEventTab;
        private System.Windows.Forms.DataGridView uxEventList;
        private System.Windows.Forms.TabPage uxSituationsTab;
        private System.Windows.Forms.Button btnSave;
        private System.Windows.Forms.TabPage uxEchoTab;
        private System.Windows.Forms.TabPage uxEmailTab;
        private System.Windows.Forms.DataGridView uxSituationsList;
        private System.Windows.Forms.DataGridView uxEchosList;
        private System.Windows.Forms.DataGridView uxEmailList;
        private System.Windows.Forms.DataGridViewTextBoxColumn echoBody;
        private System.Windows.Forms.DataGridViewTextBoxColumn echoName;
        private System.Windows.Forms.DataGridViewTextBoxColumn echoAt;
        private System.Windows.Forms.DataGridViewTextBoxColumn echoTime;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailCurrentSprint;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailSender;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailAddress;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailccs;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailTitle;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailFavorited;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailPinned;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailID;
        private System.Windows.Forms.DataGridViewTextBoxColumn emailbody;
        private System.Windows.Forms.DataGridViewTextBoxColumn eventArrayIndex;
        private System.Windows.Forms.DataGridViewTextBoxColumn eventID;
        private System.Windows.Forms.DataGridViewTextBoxColumn day;
        private System.Windows.Forms.DataGridViewTextBoxColumn month;
        private System.Windows.Forms.DataGridViewTextBoxColumn eventYear;
        private System.Windows.Forms.DataGridViewTextBoxColumn message;
        private System.Windows.Forms.DataGridViewTextBoxColumn SituationsArrayIndex;
        private System.Windows.Forms.DataGridViewTextBoxColumn situationID;
        private System.Windows.Forms.DataGridViewTextBoxColumn situation;
        private System.Windows.Forms.DataGridViewTextBoxColumn situationChoice1;
        private System.Windows.Forms.DataGridViewTextBoxColumn situationChoice2;
    }
}

