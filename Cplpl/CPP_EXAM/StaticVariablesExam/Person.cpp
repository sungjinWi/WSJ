#include "Person.h"

int CPerson::m_nPersonCount = 0; // initialize static member variable 외부에서 초기화
// .h 말고 cpp에서 초기화

CPerson::CPerson(const string& strName, int nAge) //객체생성자 초기화
{
	m_strName = strName;
	m_nAge = nAge;
	cout << "No." << ++m_nPersonCount << "Create Person" << endl;
}

CPerson::~CPerson()
{
	m_nPersonCount--;
	cout << "Person Count" << m_nPersonCount << endl;
}

void CPerson::ShowPersonInformation()
{
	cout << "This person's name : " << m_strName << ", Age : " << m_nAge << endl;
}

int CPerson::PersonCount() // static member function
{
	return m_nPersonCount;
}