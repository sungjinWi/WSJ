// CIOExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <stdio.h>
#include <stdlib.h> //only window

int main()
{
    //int c;
    //printf("Enter a value : ");
    //c = getchar(); //캐릭터로 받아서 12가 앞에 문자 1만 나온거임
    //printf("\nYour entered value : ");
    //putchar(c);



    //char strVar[100] = {0,}; //100개가 다 0이 찬다

    //printf("Input text : ");
    ////gets(strVar); // mac
    //gets_s(strVar);

    //printf("\nYour entered text : ");
    //puts(strVar);



    char strVar[100] = { 0, };
    int iVar = 0;

    printf("Input text and number : ");
    //scanf_s("%s %d", strVar, &iVar) //mac
    scanf_s("%s %d", strVar, _countof(strVar), & iVar, 1); //메모리에 직접 입력을 받는다

    printf("\nYour entered text and number : %s, %d", strVar, iVar); //배열의 이름이 주소라 & 안써준다

    return 0;
}


