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
            this.uxSituationsTab = new System.Windows.Forms.TabPage();
            this.uxEventList = new System.Windows.Forms.DataGridView();
            this.btnSave = new System.Windows.Forms.Button();
            this.uxEchoTab = new System.Windows.Forms.TabPage();
            this.uxEmailTab = new System.Windows.Forms.TabPage();
            this.uxSituationsList = new System.Windows.Forms.DataGridView();
            this.uxEchosList = new System.Windows.Forms.DataGridView();
            this.uxEmailList = new System.Windows.Forms.DataGridView();
            this.uxEventNameTab.SuspendLayout();
            this.uxEventTab.SuspendLayout();
            this.uxSituationsTab.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.uxEventList)).BeginInit();
            this.uxEchoTab.SuspendLayout();
            this.uxEmailTab.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.uxSituationsList)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.uxEchosList)).BeginInit();
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
            this.uxEventNameTab.Size = new System.Drawing.Size(776, 426);
            this.uxEventNameTab.TabIndex = 0;
            // 
            // uxEventTab
            // 
            this.uxEventTab.Controls.Add(this.uxEventList);
            this.uxEventTab.Location = new System.Drawing.Point(4, 25);
            this.uxEventTab.Name = "uxEventTab";
            this.uxEventTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxEventTab.Size = new System.Drawing.Size(768, 397);
            this.uxEventTab.TabIndex = 0;
            this.uxEventTab.Text = "Events";
            this.uxEventTab.UseVisualStyleBackColor = true;
            // 
            // uxSituationsTab
            // 
            this.uxSituationsTab.Controls.Add(this.uxSituationsList);
            this.uxSituationsTab.Location = new System.Drawing.Point(4, 25);
            this.uxSituationsTab.Name = "uxSituationsTab";
            this.uxSituationsTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxSituationsTab.Size = new System.Drawing.Size(768, 397);
            this.uxSituationsTab.TabIndex = 1;
            this.uxSituationsTab.Text = "Situations";
            this.uxSituationsTab.UseVisualStyleBackColor = true;
            // 
            // uxEventList
            // 
            this.uxEventList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxEventList.Location = new System.Drawing.Point(-4, 0);
            this.uxEventList.Name = "uxEventList";
            this.uxEventList.RowTemplate.Height = 24;
            this.uxEventList.Size = new System.Drawing.Size(776, 401);
            this.uxEventList.TabIndex = 0;
            // 
            // btnSave
            // 
            this.btnSave.Location = new System.Drawing.Point(634, 444);
            this.btnSave.Name = "btnSave";
            this.btnSave.Size = new System.Drawing.Size(150, 26);
            this.btnSave.TabIndex = 1;
            this.btnSave.Text = "Save";
            this.btnSave.UseVisualStyleBackColor = true;
            // 
            // uxEchoTab
            // 
            this.uxEchoTab.Controls.Add(this.uxEchosList);
            this.uxEchoTab.Location = new System.Drawing.Point(4, 25);
            this.uxEchoTab.Name = "uxEchoTab";
            this.uxEchoTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxEchoTab.Size = new System.Drawing.Size(768, 397);
            this.uxEchoTab.TabIndex = 2;
            this.uxEchoTab.Text = "Echos";
            this.uxEchoTab.UseVisualStyleBackColor = true;
            // 
            // uxEmailTab
            // 
            this.uxEmailTab.Controls.Add(this.uxEmailList);
            this.uxEmailTab.Location = new System.Drawing.Point(4, 25);
            this.uxEmailTab.Name = "uxEmailTab";
            this.uxEmailTab.Padding = new System.Windows.Forms.Padding(3);
            this.uxEmailTab.Size = new System.Drawing.Size(768, 397);
            this.uxEmailTab.TabIndex = 3;
            this.uxEmailTab.Text = "Email";
            this.uxEmailTab.UseVisualStyleBackColor = true;
            // 
            // uxSituationsList
            // 
            this.uxSituationsList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxSituationsList.Location = new System.Drawing.Point(0, 3);
            this.uxSituationsList.Name = "uxSituationsList";
            this.uxSituationsList.RowTemplate.Height = 24;
            this.uxSituationsList.Size = new System.Drawing.Size(768, 394);
            this.uxSituationsList.TabIndex = 0;
            // 
            // uxEchosList
            // 
            this.uxEchosList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxEchosList.Location = new System.Drawing.Point(0, 0);
            this.uxEchosList.Name = "uxEchosList";
            this.uxEchosList.RowTemplate.Height = 24;
            this.uxEchosList.Size = new System.Drawing.Size(768, 397);
            this.uxEchosList.TabIndex = 0;
            // 
            // uxEmailList
            // 
            this.uxEmailList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.uxEmailList.Location = new System.Drawing.Point(-4, 0);
            this.uxEmailList.Name = "uxEmailList";
            this.uxEmailList.RowTemplate.Height = 24;
            this.uxEmailList.Size = new System.Drawing.Size(776, 401);
            this.uxEmailList.TabIndex = 0;
            // 
            // uxEditor
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 482);
            this.Controls.Add(this.btnSave);
            this.Controls.Add(this.uxEventNameTab);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Name = "uxEditor";
            this.Text = "Editor";
            this.Load += new System.EventHandler(this.Editor_Load);
            this.uxEventNameTab.ResumeLayout(false);
            this.uxEventTab.ResumeLayout(false);
            this.uxSituationsTab.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.uxEventList)).EndInit();
            this.uxEchoTab.ResumeLayout(false);
            this.uxEmailTab.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.uxSituationsList)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.uxEchosList)).EndInit();
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
    }
}

