''''========================================================================================================================================='
'''=========================================================================================================================================
'''' Action Name - Enter_GuestDetails
'''' Purpose -Enter Guest Detils
''''Author - Foram
''''Date 12 Jul 2019
''''=========================================================================================================================================
''''=========================================================================================================================================
Option Explicit 

'Declare variables
Dim intVisitCounter, strTestCaseID

Dim strFlag, strData, strData1, strData2

''Set Action level variables
boolPageValidation="Pass"
Environment.Value("boolPageValidation") = "Pass"
gblCurrentPageName="Enter_GuestDetails"

'Load OR at run time
RepositoriesCollection.Add Environment.Value("Project_Path")&"Object Repository\Shared_OR.tsr"


'''Fetching values from environment variables
intVisitCounter=Trim(Parameter("intVisitCounter"))
strTestCaseID = Trim(Environment.Value("env_TestCaseID"))

	
''Guest Details Page NAvigation Validation - IF
If Browser("brHotelDetails").Page("pgGuestDetails").WebElement("GuestDetails").Exist(30) Then
	''For Sync -- if Page load does not work in that case - will wait for max 30 sec to display result details 


	
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_FirstName", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("Guest_FirstName","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuest_FirstName").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest First Name","",strData,"Info")
						
		End IF
		
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_LastName", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("Guest_LastName","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuest_LastName").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Last Name","",strData,"Info")
						
		End IF
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_Email", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("Guest_Email","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuest_Email").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Email","",strData,"Info")
						
		End IF
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_PhoneNumber", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("Guest_PhoneNumber","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuest_PhoneNo").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Phone Number","",strData,"Info")
						
		End IF
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_SpecialRequest", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("Guest_SpecialRequest","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuest_SpecialRequest").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Phone Number","",strData,"Info")
						
		End IF

		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_Next_Click", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
			'Click on Next button
			Browser("brHotelDetails").Page("pgGuestDetails").WebButton("GuestDetails_Next").Click									
		End IF


		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_CardNo", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("GuestPayment_CardNo","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_CardNo").Click
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_CardNo").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Card No","Note-If required we can remove this personal details from report.",strData,"Info")
						
		End IF


		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_ExpireDate", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("GuestPayment_ExpireDate","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_ExpireDate").Click
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_ExpireDate").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Expire Date","Note-If required we can remove this personal details from report.",strData,"Info")
						
		End IF

		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_CVV", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("GuestPayment_CVV","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_CVV").Click
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_CVV").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest CVV","Note-If required we can remove this personal details from report.",strData,"Info")
						
		End IF
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_NameOnCard", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("GuestPayment_NameOnCard","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_NameOnCard").Click
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_NameOnCard").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Name on Card","Note-If required we can remove this personal details from report.",strData,"Info")
						
		End IF
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_BillingAddress", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("GuestPayment_BillingAddress","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_BillingAddress").Click
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_BillingAddress").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Billing Address","Note-If required we can remove this personal details from report.",strData,"Info")
						
		End IF
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_SaveCreditDetails", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then

				''Read data for this field
				strData = DataTable.Value("GuestPayment_SaveCreditDetails","InputSheet")
				Setting.WebPackage("ReplayType") = 2
				Browser("brHotelDetails").Page("pgGuestDetails").WebCheckBox("GuestPayment_SaveCreditDetails").Set strData			
				Setting.WebPackage("ReplayType") = 1
		End IF
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_BillingAddress_City", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("GuestPayment_BillingAddress_City","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_BillingAddress_City").Click
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_BillingAddress_City").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Billing Address - City","Note-If required we can remove this personal details from report.",strData,"Info")
						
		End IF
		
		
		strFlag = ""
		strData = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"GuestPayment_BillingAddress_Zip", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
		
				''Read data for this field
				strData = DataTable.Value("GuestPayment_BillingAddress_Zip","InputSheet")
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_BillingAddress_Zip").Click
				Browser("brHotelDetails").Page("pgGuestDetails").WebEdit("txtGuestPayment_BillingAddress_Zip").Set strData			
				''Reporting purpose
				Call fnResult_StepWise(strTestCaseID,"Guest Billing Address - Zip","Note-If required we can remove this personal details from report.",strData,"Info")
						
		End IF
		
		
	
		
		
		strFlag = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_CompleteBooking_Click", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then

			Browser("brHotelDetails").Page("pgGuestDetails").WebButton("btnCompleteBooking").Click

		End IF
		
				
		strFlag = ""
		strData = ""
		strData2 = ""
		strFlag = fnGetFieldFlagValue(Trim(Environment.Value("env_TestCaseID")),"Guest_CompleteBooking_PopUpMsg", intVisitCounter)			
		If Lcase(strFlag) = "yes" Then
				''Read data for this field
				strData = DataTable.Value("Guest_CompleteBooking_PopUpMsg","InputSheet")
				strData1 = DataTable.Value("Guest_CompleteBooking_PopUpMsg1","InputSheet")
				
				If Browser("brHotelDetails").Page("pgBookingPopUp").WebElement("BookingPopUpMsg").Exist(30) Then
					strData2 = Browser("brHotelDetails").Page("pgBookingPopUp").WebElement("BookingPopUpMsg").GetROProperty("outertext")
					
					If strData1=strData2 or strData=strData2  Then
						Call fnResult_StepWise(strTestCaseID,"Confirmation Error PopUp - Msg",strData,strData2,"Pass")
						
					Else
						Call fnResult_StepWise(strTestCaseID,"Confirmation Error PopUp- Msg",strData,strData2,"Fail")
						boolPageValidation = "Fail"
						
					End If
					Browser("brHotelDetails").Page("pgBookingPopUp").WebButton("BookingPopUpOK").Click
				Else
					Call fnResult_StepWise(strTestCaseID,"Confirmation Error PopUp","Confirmation Error PopUp is Expected","Confirmation Error PopUp is NOT Presnt","Fail")
					boolPageValidation = "Fail"
				End If

				
				
		End IF
		
''''=================================================Reporting -- Booking Details==========================================================='
'''========================================================================================================================================='

		strData = ""
		strData = Browser("brHotelDetails").Page("pgBookingDetails").WebElement("HotelName").GetROProperty("outertext")		
		Call fnResult_StepWise(strTestCaseID,"Booking Details - Hotel Name","",strData,"Info")

		strData = ""
		strData2 = ""
		strData2 = Browser("brHotelDetails").Page("pgBookingDetails").WebElement("Address").GetROProperty("outertext")
		strData = Split(strData2,":")
		strData(1) = Replace(strData(1),"Phone","")
		strData(2) = Replace(strData(2),"Room","")
		Call fnResult_StepWise(strTestCaseID,"Booking Details - Address - ","",strData(1),"Info")
		Call fnResult_StepWise(strTestCaseID,"Booking Details - Phone - ","",strData(2),"Info")
		Call fnResult_StepWise(strTestCaseID,"Booking Details - Room - ","",strData(3),"Info")
		
		
		strData = ""
		strData2 = ""
		strData2 = Browser("brHotelDetails").Page("pgBookingDetails").WebElement("BookingDetails").GetROProperty("outertext")
		strData = Split(strData2,":")
		strData(1) = Replace(strData(1),"Check-out","")
		strData(2) = Replace(strData(2),"For","")
		Call fnResult_StepWise(strTestCaseID,"Booking Details - CheckIn - ","",strData(1),"Info")
		Call fnResult_StepWise(strTestCaseID,"Booking Details - CheckOut - ","",strData(2),"Info")
		Call fnResult_StepWise(strTestCaseID,"Booking Details - Days - ","",strData(3),"Info")
		
		strData = ""
		strData2 = ""
		strData2 = Browser("brHotelDetails").Page("pgBookingDetails").WebElement("Price").GetROProperty("outertext")
		strData = Split(strData2,"Note:-")
		Call fnResult_StepWise(strTestCaseID,"Booking Details - Price Details","",strData(0),"Info")		
		
		
				
		
		

Else''Guest Details Page NAvigation Validation - IF - Else
	Call fnResult_StepWise(strTestCaseID,"Search Result - Room Details","","Taking more than 30 sec. to load the serach details","Fail")
	boolPageValidation ="Fail"
End If ''Guest Details Page NAvigation Validation - IF- ENDs
			
			
			
''writing page validation results
If boolPageValidation<>"Pass" or Environment.Value("boolPageValidation") = "Fail" Then
    boolPageValidation = "Fail"
    gblFlagproceed = "Stop"
End If




