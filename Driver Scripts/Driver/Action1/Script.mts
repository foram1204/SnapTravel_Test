''''*****************************************************************************************************************
''''Action Name - Driver Script
''''Purpose - To get details from Execution Sheet and run test scenarios accordingly
''''Author - Foram Raval
''''Date - 12 Jul 2019
''''*****************************************************************************************************************
Option Explicit

Dim strExecutionFlow, arrStrTestParams, iTestNo, arrIndTestParams, intIterationNumber, arrTestFlow, iTestItNo
Dim strStartTime, strStartDate, Iterator, strKeyword, intVisitCounter, intIterationCounter, cIterator
Dim sResultXLPath, sTimeStamp
Dim sResultXL_TestCaseWise, sResultXL_StepWise


Dim i, j
Dim iIterate
' 
''Setting Project Path
Environment.Value("Project_Path") = Replace(Environment.Value("TestDir"),"Driver Scripts\Driver","")
Environment.Value("env_ExecutionSheetPath") = Environment.Value("Project_Path")&"Control Structures\Execution_Sheet.xls"
Environment.Value("env_ControlSheetPath") = Environment.Value("Project_Path")&"Control Structures\Control_Sheet.xls"
Environment.Value("env_InputSheetPath") = Environment.Value("Project_Path")&"Control Structures\InputData_Sheet.xls"

Environment.Value("env_SharedDrive") = Environment.Value("Project_Path") & "Framework Snapshots"


''''Call function libraries at run time
LoadFunctionLibrary Environment.Value("Project_Path")&"Config Files\EnvironmentVariables.txt", _
                    Environment.Value("Project_Path")&"Generic Functions\Recovery.qfl"
                                    
Datatable.AddSheet "InputSheet"

Datatable.import Environment.Value("env_ExecutionSheetPath") 

Datatable.ImportSheet Environment.Value("env_InputSheetPath"),"InputSheet","InputSheet"


''
''datatable.GetSheet("Global").SetCurrentRow(1)
''
''datatable.GetSheet("InputSheet").SetCurrentRow(4)

Call fnResult_TestCaseWise_AddSheet

Call fnResult_StepWise_AddSheet

Call fnBasicSetup

gResultStepWiseIteration = 1

j=1
'iIterate = 
''''=================================================================================================
''''============================Iterate through Execution flag xl=STARTS============================
''''=================================================================================================
For i = 1 To Datatable.GetRowCount

Datatable.SetCurrentRow(i)
DataTable.GetSheet("Result_TestCaseWise").SetCurrentRow(j)

'Msgbox DataTable.Value("ExecutionFlag",1)

	If LCase(DataTable.Value("ExecutionFlag",1))="y" Then ''''Look into Scenario only if Execution flag is - Y - IF
	''	Parameter("TestParam") = "QA~foram~V1~Sprint1~Cycte1~Smoke~Test_Login111~2~1"
		
		j = j + 1 ''''To iterate through next row in result xl
		
		strExecutionFlow = 	DataTable.Value("Environment",1)&"~"& _
							DataTable.Value("User",1)&"~"& _
							DataTable.Value("Release",1)&"~"& _
							DataTable.Value("Sprint",1)&"~"& _
							DataTable.Value("Cycle",1)&"~"& _
							DataTable.Value("Module",1)&"~"& _
							DataTable.Value("TestCase",1)&"~"& _
							DataTable.Value("Iteration",1)&"~"& _
							DataTable.Value("RowIndex",1)

		DataTable.Value("TestCase","Result_TestCaseWise")= DataTable.Value("TestCase",1)
''''=================================================================================================
''''============================Read TC flow as per Execution flag xl=STARTS=========================
''''=================================================================================================

	arrStrTestParams=Split(Trim(strExecutionFlow),"++")
	For iTestNo=0 To Ubound(arrStrTestParams)
	 	arrIndTestParams=Split(arrStrTestParams(iTestNo),"~")	
		 'selecting test environment
		 If Trim(arrIndTestParams(0))="QA" Then
		 	Environment.Value("env") = "QA"
		 	Environment.Value("env_URL")="https://www.snaptravel.com/search?encrypted_user_id=5xqebwRCiWusH08KS2yJKA"	
		 ElseIf Trim(arrIndTestParams(0))="DEV" Then
		 	Environment.Value("env") = "DEV"
		 	Environment.Value("env_URL")="https://www.snaptravel.com/search?encrypted_user_id"		
		 End If
	
		'selecting test USerName
		Environment.Value("env_UserName")=Trim(arrIndTestParams(1))
			
		'selecting test release
		Environment.Value("env_Release")=Trim(arrIndTestParams(2))	
	
		'selecting test sprint
		Environment.Value("env_Sprint") =Trim(arrIndTestParams(3))
		
		'selecting test cycle
		Environment.Value("env_TestCycle")=Trim(arrIndTestParams(4))
		
		'selecting Module
		Environment.Value("env_Module") =Trim(arrIndTestParams(5))
		
		'selecting test scenario
		Environment.Value("env_TestCaseID") =Trim(arrIndTestParams(6))
		
		'Selecting iteration - decides how many times a test case should be executed.
		intIterationNumber=Trim(arrIndTestParams(7))
		
		'selecting rowindex for test case (named as IterationCounter in input data)
		Environment.Value("env_IterationNumber")=Trim(arrIndTestParams(8))
		
		
		arrTestFlow=fnGetTestCaseFlow(Environment.Value("env_TestCaseID"))
		Call fnInputData_FindTC(Environment.Value("env_TestCaseID"))
		'''===================================================================================
		If  gTestCaseIdFlag = "NotPresent"	Then '' ''Check IF test case ID is present in Control Excel - IF
		
			Print "Test Case is not present in Control Sheet excel -" & Environment.Value("env_TestCaseID")
			DataTable.Value("ExecutionResult","Result_TestCaseWise")= "Test Case is not present in Control Sheet excel"
		'''===================================================================================
		Else'' ''Check IF test case ID is present in Control Excel - IF - ELse
		'''===================================================================================
		
		
				For iTestItNo = 1 To intIterationNumber Step 1 '2. For no of iterations mentioned in UI controller
						
						''Value setting up
						gblFlagproceed = "Proceed"	
						strStartTime=Time		
						strStartDate=NOW
						Environment.Value("strStartDate") = Replace(Replace(Replace(strStartDate,"/",""),":","")," ","")			
						Environment.Value("boolPageValidation") = ""
					
						 'executing modules corresponding to keywords
						For Iterator = 0 To UBound(arrTestFlow,2) Step 1             '3. for all keywords of specific test case
								
								If gblFlagproceed = "Stop" Then
									Exit For
								End If	
								
													
								strKeyword=arrTestFlow(0,Iterator) 'test case id
								intVisitCounter=arrTestFlow(1,Iterator) 'visit counter
								intIterationCounter=arrTestFlow(2,Iterator) 'iterations
								
								
								For cIterator = 1 To intIterationCounter Step 1 '4 for a single keyword
									
									If gblFlagproceed = "Stop" Then
									Exit For
									End If			
									
											'''Calling Action at Run Time
											LoadAndRunAction Environment.Value("Project_Path")&"Modules\"&strKeyword, "Action1", oneIteration, intVisitCounter
											If gblFlagproceed = "Stop" Then
											   Exit For
											End If	
							
			
						
							Next  	 '4 for a single keyword
					 
						Next 	'3. for all keywords of specific test case
						
						If gblFlagproceed = "Stop" Then
							gblTestCaseStatus="Fail"
							DataTable.Value("ExecutionResult","Result_TestCaseWise")= "Fail"
						Else
							DataTable.Value("ExecutionResult","Result_TestCaseWise")= "Pass"
						End If			
				
							
					Next	'2. For no of iterations
				
	
	
			End If '' ''Check IF test case ID is present in Control Excel - IF - ENDS
		'''===================================================================================
						
				
	Next	 '1. For every test case execution flag


	''''=================================================================================================
	''''============================Read TC flow as per Execution flag xl=ENDS===========================
	''''=================================================================================================
	
	
	End If ''''Look into Scenario only if Execution flag is - Y - IF - ENDS


Next 


sTimeStamp = Replace(Replace(Replace(Now,"/",""),":","")," ", "")
sResultXL_TestCaseWise = Environment.Value("Project_Path") & "\Results\Result_TestCaseWise_" & sTimeStamp & ".xls"
sResultXL_StepWise = Environment.Value("Project_Path") & "\Results\Result_StepWise_" & sTimeStamp & ".xls"

DataTable.ExportSheet sResultXL_TestCaseWise,"Result_TestCaseWise"
DataTable.ExportSheet sResultXL_StepWise,"Result_StepWise"







''''=================================================================================================
''''============================Iterate through Execution flag xl=ENDS===============================
''''=================================================================================================









'a=0
