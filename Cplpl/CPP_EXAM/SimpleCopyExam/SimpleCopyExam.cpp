// 2/03 4번째

#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    // 미리 파일 크기 확인 후 한번에 읽어서 복사
    ifstream in;
    in.open("workplace.jpg", ios::in | ios::binary);

    // total file size
    in.seekg(0, ios::end);
    long fileLength = in.tellg();
    cout << "Read file size : " << fileLength << " Bytes" << endl;

    // loading total file size in memory
    in.seekg(0, ios::beg);
    char* buf = new char[fileLength];
    in.read(buf, fileLength); // buf에 파일 다 읽어옴
    in.close();

    // buffer to file
    ofstream out;
    out.open("workplace_copy.jpg", ios::out | ios::binary); //뒤에 옵션 없으면 손상된파일로 카피됨
    out.write(buf, fileLength);
    out.close();


    return 0;
}




