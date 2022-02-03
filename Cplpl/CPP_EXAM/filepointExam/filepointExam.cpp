//  2/03 세번째

#include <iostream>
#include <fstream>

using namespace std;

const char* fileName = "workplace.jpg";

int main()
{
	long lFirst, lEnd;

	ifstream iFile;
	iFile.open(fileName, ios::in | ios::binary);
	lFirst = iFile.tellg(); // tellg 읽어올 곳의 포인터가 어디니 현재파일의 포지션/ 현재는 오픈만 했으니 제일 앞일것
	iFile.seekg(0, ios::end);
	lEnd = iFile.tellg();
	iFile.close();

	cout << "file [" << fileName << "] size : " << (lEnd - lFirst) << endl;

	return 0;
}

