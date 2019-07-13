''''========================================================================================================================================='
'''=========================================================================================================================================
'''' Action Name - Select_Room
'''' Purpose -Select Hotel Room for booking
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
gblCurrentPageName="Select_Room"

'Load OR at run time
RepositoriesCollection.Add Environment.Value("Project_Path")&"Object Repository\Shared_OR.tsr"


'''Fetching values from environment variables
intVisitCounter=Trim(Parameter("intVisitCounter"))
strTestCaseID = Trim(Environment.Value("env_TestCaseID"))

		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Hotel_Select_Room_Cheapest", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
			If Browser("brHotelDetails").Page("pgbrHotelDetails").WebElement("btnReserveRoom").Exist(30)  Then

				Browser("brHotelDetails").Page("pgbrHotelDetails").WebElement("btnReserveRoom").Click

			Else
				Call fnResult_StepWise(strTestCaseID,"Room Details","There should be data present","There is NOT data present","Fail")
				boolPageValidation ="Fail"
			End If
'
			''Page Sync Validation
			If Browser("brHotelDetails").Page("pgGuestDetails").WebElement("GuestDetails").Exist(30) Then
				''For Sync -- if Page load does not work in that case - will wait for max 30 sec to display result details 
			Else
				Call fnResult_StepWise(strTestCaseID,"Search Result - Room Details","","Taking more than 30 sec. to load the serach details","Fail")
				boolPageValidation ="Fail"
			End If
'			
			
		End IF




''writing page validation results
If boolPageValidation<>"Pass" or Environment.Value("boolPageValidation") = "Fail" Then
    boolPageValidation = "Fail"
    gblFlagproceed = "Stop"
End If




