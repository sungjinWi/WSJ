#include <iostream>

using namespace std;

//argc는 arg의 개수 []는 arg를 받을 배열 pointer
int main(int argc, char* argv[])
{
  int num;
  num = 15;
  // int num = 15; 선언과 동시에 초기화
  //cout은 출력 "\n"은 줄바꿈 endl; 도 줄바꿈
  cout << num <<"\n" ;

  if(argc > 1)
  {
    cout << "argc = " << argc << endl;
    for(int i=0; i < argc; i++)
    {
      cout << "argv[" << i <<"]" << "=" << argv[i] << endl;
    }
  }
  return 0;
}