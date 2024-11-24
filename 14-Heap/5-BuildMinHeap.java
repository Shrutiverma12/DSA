import java.util.* ;
import java.io.*; 
public class Solution
{
    static void heapify(int arr[],int n, int i){
		int smallest = i;
		int left = 2*i+1;
		int right = 2*i+2;

		if(left<n && arr[left] < arr[smallest]){
			smallest = left;
		}

		if(right <n && arr[right] < arr[smallest]){
			smallest = right;
		}

		if(smallest != i){
            int temp = arr[smallest];
			arr[smallest] = arr[i];
			arr[i] = temp;
            heapify(arr, n, smallest);

		}
	}
	public static int[] buildMinHeap(int[] arr)
	{
		// Write your code here
        int n = arr.length;
		for(int i = (n/2) - 1 ; i>= 0; i--){
			heapify(arr,n,i);
		}
		return arr;
	}
}


