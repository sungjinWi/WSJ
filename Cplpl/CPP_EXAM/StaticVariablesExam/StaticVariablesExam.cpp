// 1/28 5번째

#include <iostream>
#include "Person.h"

int main()
{
	CPerson* pLas = new CPerson("Las Ulich", 59);
	CPerson* pJames = new CPerson("James Hettfield", 59);
	CPerson* pKirk = new CPerson("Kirk Hamett", 60);
	CPerson* pRobert = new CPerson("Robert Trujilo", 58);

	cout << "Currently created people : " << CPerson::PersonCount() << endl;

	if (pLas != NULL) delete pLas;
	if (pJames != NULL) delete pJames;
	if (pKirk != NULL) delete pKirk;
	if (pRobert != NULL) delete pRobert;

	return 0;
}

