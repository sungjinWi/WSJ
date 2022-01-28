

#include <iostream>
#include <time.h>

using namespace std;

int GetCurrentTime(void)
{
    //Mac
    /*time_t curTime = time(NULL);
    struct tm* pLocalTime = NULL;*/
    //Window
    time_t curTime = time(NULL); //현재 시간을 가져오는것
    struct tm pLocalTime;

    //pLocalTime = localtime(&curTime); //Mac
    localtime_s(&pLocalTime, &curTime);

    //if (pLocalTime ==NULL) //Mac
    if (&pLocalTime == NULL)
    {
        //time get failure then return -1
        return -1;
    }

    //return pLocalTime->tm_hour; // Mac pointer의 멤버에 접근
    return pLocalTime.tm_hour;
}

int GetCurrentDay(void)
{
    
   //Window
    time_t curTime = time(NULL); //현재 시간을 가져오는것
    struct tm pLocalTime;

    localtime_s(&pLocalTime, &curTime);

    if (&pLocalTime == NULL)
    {
        return -1;
    }

    return pLocalTime.tm_wday;
}

int main()
{
    int time = -1;
    int wDay = -1;
    time = GetCurrentTime();
    wDay = GetCurrentDay();
    if (time < 0)
        return 128;
    if (time < 10)
    {
        cout << "Goo Morning KDigital class 4";
    }
    else if(time < 20)
    {
        cout << "Good day KDigital class 4";
    }
    else
    {
        cout << "Good evening KDigital class 4";
    }

    cout << "\r\n";

    if (wDay < 0)
        return 129;

    switch (wDay)
    {
        case 1:
            cout << "Monday";
            break;
        case 2:
            cout << "Tuesday";
            break;
        case 3:
            cout << "Wednesday";
            break;
        case 4:
            cout << "Thursday";
            break;
        case 5:
            cout << "Friday";
            break;
        case 6:
            cout << "Saturday";
            break;
        case 7:
            cout << "Sunday";
            break;
        default:
            break;
    }

    return 0;
}

