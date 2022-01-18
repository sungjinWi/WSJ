#include <iostream>
#include <stdio.h> //c언어출력

using namespace std;

//argc는 arg의 개수 []는 arg를 받을 배열 pointer
int main(int argc, char* argv[])
{

  double fNum = 99.999;
  char cLetter = 'A';
  string strText = "Hello C++ !!!";

  cout << "fNum = " << fNum << ", cLetter = " << cLetter <<", strText = " << strText << endl;
  printf("floatNum[%f], charLetter[%c]\n", fNum, cLetter); //c 출력

  int x = 15, y = 20, z = 21;
  cout << "x = " << x << " y = " << y << " z = " << z << endl;
  cout << x + y + z << endl;

  return 0;
}
