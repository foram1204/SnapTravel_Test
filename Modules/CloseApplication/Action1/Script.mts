''''========================================================================================================================================='
'''=========================================================================================================================================
'''' Action Name - CloseApplication
'''' Purpose - close all browsers
''''Author - Foram
''''Date 12 Jul 2019
''''=========================================================================================================================================
''''=========================================================================================================================================
Option Explicit 

'Declare variables
Dim intVisitCounter, strTestCaseID

''Set Action level variables
boolPageValidation="Pass"
Environment.Value("boolPageValidation") = "Pass"
gblCurrentPageName="CloseApplication"

''''Close all IE browsers
SystemUtil.CloseProcessByName "iexplore.exe"
''''Close all xl objects
SystemUtil.CloseProcessByName "EXCEL.exe"
   	
   	
   	
''writing page validation results
If boolPageValidation<>"Pass" or Environment.Value("boolPageValidation") = "Fail" Then
    boolPageValidation = "Fail"
    gblFlagproceed = "Stop"
End If




