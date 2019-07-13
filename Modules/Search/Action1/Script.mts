''''========================================================================================================================================='
'''=========================================================================================================================================
'''' Action Name - Search
'''' Purpose - Search hotels as per input data
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
gblCurrentPageName="Search"

'Load OR at run time
RepositoriesCollection.Add Environment.Value("Project_Path")&"Object Repository\Shared_OR.tsr"


'''Fetching values from environment variables
intVisitCounter=Trim(Parameter("intVisitCounter"))
strTestCaseID = Trim(Environment.Value("env_TestCaseID"))


		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Search_Place", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
				''Read data for this field
				strData = DataTable.Value("Search_Place","InputSheet")
				
				''Due to inconsistance behaviour of this object ' First clicking on this object before changing text value
				Browser("brSearch").Page("pgSearch").WebEdit("txtSearchPlace").Click
				Browser("brSearch").Page("pgSearch").WebEdit("txtSearchPlace").Set strData
				
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Search Place","",strData,"Info")
				
		End IF


		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Search_Click", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
			''Click on Search button
			Browser("brSearch").Page("pgSearch").WebElement("btnSearchHotels").Click

			''Check if user is navigated to next screen
			Browser("brSearch").Page("pgSearchResult").Sync
			
			If Browser("brSearch").Dialog("dbPopUpMsg").Exist(5) Then
			
				strData = Browser("brSearch").Dialog("dbPopUpMsg").Static("MsgTxt").GetROProperty("text")
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Search Result Navigation","User should be navigated to Search Result Page","User got this pop up -" & strData,"Fail")
				boolPageValidation ="Fail"
				''Click on OK
				Browser("brSearch").Dialog("dbPopUpMsg").WinButton("btnOK").Click
				
			End If
			
			If Browser("brSearch").Page("pgSearchResult").WebElement("ModifySearch").Exist(30) Then
				Call fnResult_StepWise(strTestCaseID,"Search Result Navigation","User should be navigated to Search Result Page","User is navigated to Search Result Page","Pass")
				
			Else
				Call fnResult_StepWise(strTestCaseID,"Search Result Navigation","User should be navigated to Search Result Page","User is NOT navigated to Search Result Page","Fail")
				boolPageValidation ="Fail"
			End If
			
			
			If Browser("brSearch").Page("pgSearchResult").WebElement("SortBy").Exist(30) Then
				''For Sync -- if Page load does not work in that case - will wait for max 30 sec to display result details 
			Else
				Call fnResult_StepWise(strTestCaseID,"Search Result Details","","Taking more than 30 sec. to load the serach details","Fail")
				boolPageValidation ="Fail"
			End If

		End IF



''writing page validation results
If boolPageValidation<>"Pass" or Environment.Value("boolPageValidation") = "Fail" Then
    boolPageValidation = "Fail"
    gblFlagproceed = "Stop"
End If




