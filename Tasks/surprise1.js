var values = [Field('Name1'), 
var table = new FPTable;
table.AddColumns(134000,134000,134000,134000);
table.AddRows(6);
table.Rows[0].Type = "";
table.Rows[0].CopyCells(0,1,2,3);
var values = [Field('Name1'), Field('Name2'), Field('Name3'), Field('Name4'), Field('Name5'), Field('Name6'), Field('Name7'), Field('Name8')]

var filteredValue = values.filter(Boolean)
for (var i = 1; i <= Math.ceil(filteredValue.length / 4); i++) {
var row = [];
var row = filteredValue.slice((i-1)*4, 4 * i)

if (row.length==1){
table.Rows[i].SetContents(row[0]);
}
else if (row.length==2){
table.Rows[i].SetContents(row[0],row[1]);
}
else if (row.length==3){
table.Rows[i].SetContents(row[0],row[1], row[2]);
}
else if (row.length==4){
table.Rows[i].SetContents(row[0],row[1], row[2], row[3]);
}
table.Rows[i].Cells[0].Margins = new FPTableMargins;
table.Rows[i].Cells[0].Margins.Bottom = 2000;
table.Rows[i].Cells[0].VAlign = "Center";
table.Rows[i].Cells[0].HAlign = "Center";

}
return table.MakeTags();
