

#include <iostream>
#include <string>

using namespace std;

void abc(int& x)
{
	x = 100;
	cout << x << endl;
}

int main()
{
	string food = "pizza";
	string& meal = food; //meal이라는 주소에 food값을 넣었어

	meal = "Hamburger";

	cout << food << ", Address of food : " << &food << endl;
	cout << meal << ", Address of meal : " << &meal << endl;

	int xx = 200;
	cout << "xx : " << xx << endl;

	abc(xx);
	cout << "xx : " << xx << endl;

	return 0;
}


