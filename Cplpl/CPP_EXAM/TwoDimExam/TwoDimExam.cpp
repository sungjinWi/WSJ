// 1/25 2번째

#include <iostream>

using namespace std;

//1st

//int main()
//{
//	int arrNumber[5][2] = { 
//		{0, 1}, 
//		{2, 3}, 
//		{4, 5}, 
//		{6, 7}, 
//		{8, 9} 
//	};
//
//	for (int i = 0; i < 5; i++) 
//	{
//		for (int j = 0; j < 2; j++) 
//		{
//			cout << "a[" << i << "][" << j << "] : " << arrNumber[i][j] << endl;
//		}
//	}
//
//	return 0;
//}


//2nd

int main()
{
	int row = 3, col = 5;

	int* row_1 = new int[col] {1, 2, 3, 4, 5};
	int* row_2 = new int[col] {6, 7, 8, 9, 10};
	int* row_3 = new int[col] {11, 12, 13, 14, 15};

	int** twod_array = new int* [row] {row_1, row_2, row_3};

	for (int i = 0; i < row; i++)
			{
				for (int j = 0; j < col; j++) 
				{
					cout << twod_array[i][j] << " ";
				}

				cout << endl;
			}
		


	//순서대로 지워라
	delete[] row_1; //delete도 [] 써야됨
	delete[] row_2;
	delete[] row_3;
	delete[] twod_array;

}


