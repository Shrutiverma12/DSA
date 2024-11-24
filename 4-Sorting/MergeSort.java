/**
 * 4-MergeSort
 */
public class MergeSort {
   public static int[] merge(int [] left, int [] rigth)  {
     int i = 0;
     int j = 0;
     int k = 0;
     int m = left.length;
     int n = rigth.length;
     int []result = new int[m+n] ;
     while (i<m && j<n) {
       if(left[i] <= rigth[j]){
         result[k] = left[i];
         k++;
         i++;
       }else{
        result[k] = rigth[j];
        k++;
        j++;
       }
     }
     while (i<m) {
      result[k] = left[i];
      i++;
      k++;
     }
     while (j<n) {
      result[k] = rigth[j];
      k++;
      j++;
     }
     return result;
   }

   public static int[] mergeSortHelper(int arr[] , int start , int end){
      if(start == end){
        int[] result = new int[1];
        result[0] =arr[start];
        return result;
      }
      int mid = (start+end)/2;
      int [] left = mergeSortHelper(arr, start, mid);
      int [] right = mergeSortHelper(arr, mid+1, end);
      return merge(left,right);
   }

  public static int[] mergeSort(int[] array){
    return mergeSortHelper(array,0,array.length -1);
  }
  public static void main(String [] args){
    int [] arr = {1,2,5,0,4,7,6};
    arr = mergeSort(arr);
    for(int i = 0; i<arr.length; i++){
      System.out.print(arr[i]);
    }
  }
  
}
