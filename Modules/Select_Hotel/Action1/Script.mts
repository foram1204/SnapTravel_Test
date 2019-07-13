''''========================================================================================================================================='
'''=========================================================================================================================================
'''' Action Name - Select_Hotel
'''' Purpose -Select Hotel for booking
''''Author - Foram
''''Date 12 Jul 2019
''''=========================================================================================================================================
''''=========================================================================================================================================
Option Explicit 

'Declare variables
Dim intVisitCounter, strTestCaseID

Dim strFlag, strData

''Set Action level variables
boolPageValidation="Pass"
Environment.Value("boolPageValidation") = "Pass"
gblCurrentPageName="Select_Hotel"

'Load OR at run time
RepositoriesCollection.Add Environment.Value("Project_Path")&"Object Repository\Shared_OR.tsr"


'''Fetching values from environment variables
intVisitCounter=Trim(Parameter("intVisitCounter"))
strTestCaseID = Trim(Environment.Value("env_TestCaseID"))


		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Hotel_Select_Cheapest2", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
			If Browser("brSearch").Page("pgSearchResult").WebElement("btnViewDetails").Exist(30) Then
				''Simulating mouse movement - as simple click is not workin
				Setting.WebPackage("ReplayType") = 2
				Browser("brSearch").Page("pgSearchResult").WebElement("btnViewDetails").Click
				Setting.WebPackage("ReplayType") = 1
			Else
				Call fnResult_StepWise(strTestCaseID,"Search Result Details","There should be data present","There is NOT data present","Fail")
				boolPageValidation ="Fail"
			End If

			''Page Sync Validation
			If Browser("brHotelDetails").Page("pgbrHotelDetails").WebElement("btnSelectRoom").Exist(30) Then
				''For Sync -- if Page load does not work in that case - will wait for max 30 sec to display result details 
			Else
				Call fnResult_StepWise(strTestCaseID,"Search Result - Hotel Details","","Taking more than 30 sec. to load the serach details","Fail")
				boolPageValidation ="Fail"
			End If
			
			
		End IF




''writing page validation results
If boolPageValidation<>"Pass" or Environment.Value("boolPageValidation") = "Fail" Then
    boolPageValidation = "Fail"
    gblFlagproceed = "Stop"
End If




