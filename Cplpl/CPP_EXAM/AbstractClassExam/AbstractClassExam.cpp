// 1/28 7번째

#include <iostream>

using namespace std;

class Animal
{
public:
	virtual ~Animal() {};
	virtual void Cry() = 0;
};

class Dog : public Animal
{
public :
	virtual void Cry()
	{
		cout << "Bow Wow" << endl;
	}
};

class Cat : public Animal
{
public:
	virtual void Cry()
	{
		cout << "Miyao miyao" << endl;
	}
};

int main()
{
	Animal* animal;
	Dog myDog;
	myDog.Cry();
	Cat myCat;
	myCat.Cry();

	animal = &myDog;
	animal->Cry();
	
	animal = &myCat;
	animal->Cry();

	return 0;
}




