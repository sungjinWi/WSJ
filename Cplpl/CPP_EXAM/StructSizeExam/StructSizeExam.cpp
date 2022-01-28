// 1/26 3번째

#include <iostream>

using namespace std;

#pragma pack (push, 1)
struct ExamSize
{
	char a;
	int b;
	double c;
};

#pragma pack (pop)

struct ExamSize1
{
	char a;
	int b;
	double c;
};

int main(int argc, char* argv[])
{
	cout << "Structure ExamSize's each Member variable size : " << endl;
	cout << "char : " << sizeof(char) << ", " << sizeof(int) << ", " << sizeof(double) << endl;

	cout << "Size of structure : " << sizeof(ExamSize) << endl;
	cout << "Size of structure1 : " << sizeof(ExamSize1) << endl;

	return 0;
}
