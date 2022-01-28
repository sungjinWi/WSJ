#include "Line.h"


CLine::CLine()
{
	cout << "CLine Object is being created" << endl;
	m_pStrLineName = new char[16]; //string이 없던 시절 이렇게 string을 표현함
}

CLine::~CLine()
{
	cout << "CLine Object is being deleted" << endl;
	if (m_pStrLineName != NULL)
	{
		delete m_pStrLineName;
	}
}

void CLine::SetLength(double len)
{
	m_dLength = len;
}

double CLine::GetLength()
{
	return m_dLength;
}