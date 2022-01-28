

#include <iostream>

using namespace std;

void IncrementAll(int* start, int* stop) //CPP는 함수가 대문자로 시작된다
{
    int* current = start; //initialize
    while (current != stop)
    {
        ++(*current); // increment value pointed(data)
        ++current;    // increment pointer(address)
    }
}

void PrintAll(const int* start, const int* stop)
{
    const int* current = start;

    while (current != stop)
    {
        cout << *current << endl;
        ++current;    // increment pointer(address)
    }
}

int main()
{
    int nNumbers[] = { 10, 20, 30 };
    IncrementAll(nNumbers, nNumbers + 3); //3번째 방의 포인터를 넘겼어
    PrintAll(nNumbers, nNumbers + 3); 

    return 0;
}

