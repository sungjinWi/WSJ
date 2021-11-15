#include <sdio.h>

//extern "c" int sum; 다른 c파일에서도 Tmfrjdla

int sum; // global

void main(int argc, char* avrgv[])
{
    int sumlocal;

    sum = sum + 1;

    for(int sum = 0; sum < 100; sum++)
    {
      sum = sum + 1;  // 변수의 이름도 사용하는것에 맞게 사용해야함
    }
}

void add()
{
    sum = sum +1;
}
