function push() {
  
  var iMaster = SpreadsheetApp.openById("1sEjzhq96me6aaQLIBqY6Wfgy9D6VrKhtHL9eUoqyT2Q"); // finding the master spreadsheet currently set to Test Rig 5
    var iSheet = iMaster.getSheetByName("Raw Upload"); // finding the sheet within the master that we dump the event in to
   
    var mTest = iSheet.getRange(1,2,iSheet.getLastRow()); // find the last row in the dump sheet
    var lowerBound = mTest.getLastRow(); // finding the actual number of the last row
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event List"); // finds the event list sheet
    var ssI = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Input Sheet"); // finds the input sheet
    var dumpL = ss.getRange(1,1).getValue(); // the number of events it has to transfer
    var analyst = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet Details").getRange(7,3).getValue(); // finds the email address of the analyst on the Sheet Details
 
    
  
  
  if (analyst ==""){
    SpreadsheetApp.getUi().alert('Please enter the email address of the analyst');
      } else if(analyst !== "") {
    
  
    var tDate = new Date();
    
  
    for (var i = 2; i < dumpL+2; i++){
    
      ss.getRange(i,18).setValue(analyst);
      ss.getRange(i,19).setValue(tDate);
    
  }
  
    var whole = ss.getRange(2,2,dumpL,29).getValues(); // finds the range of the events
    Logger.log(dumpL);
  
    iSheet.getRange(lowerBound+1,2,dumpL,29).setValues(whole); // transfers all the events to the master 'Raw Upload'
    ss.getRange("b2:z52").clearContent(); 
    
  }
  
}
