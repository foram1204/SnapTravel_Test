''''========================================================================================================================================='
'''=========================================================================================================================================
'''' Action Name - LaunchApplication
'''' Purpose - Launch Application
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
gblCurrentPageName="LaunchApplication"

'Load OR at run time
RepositoriesCollection.Add Environment.Value("Project_Path")&"Object Repository\Shared_OR.tsr"


'''Fetching values from environment variables
intVisitCounter=Trim(Parameter("intVisitCounter"))
strTestCaseID = Trim(Environment.Value("env_TestCaseID"))

''Launch URL in IE
SystemUtil.Run "iexplore.exe", Environment.Value("env_URL"), , ,3

''Reporting purpose
Call fnResult_StepWise(strTestCaseID,"URL","",Environment.Value("env_URL"),"Info")

''Validate if User is navigated to Home page or not
If Browser("brSearch").Page("pgSearch").WebElement("SearchHotels").Exist(30) Then	
''Reporting purpose
	Call fnResult_StepWise(strTestCaseID,"URL","User should be navigated to Home Page","User is navigated to Home Page","Pass")
Else
''Reporting purpose
	Call fnResult_StepWise(strTestCaseID,"URL","User should be navigated to Home Page","User is NOT navigated to Home Page","Fail")
	boolPageValidation ="Fail"
End If

If Browser("brSearch").WinObject("Notification").Exist(3) Then
	Browser("brSearch").WinObject("Notification").WinButton("No").Click
End If



''writing page validation results
If boolPageValidation<>"Pass" or Environment.Value("boolPageValidation") = "Fail" Then
    boolPageValidation = "Fail"
    gblFlagproceed = "Stop"
End If




