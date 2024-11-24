class MedianFinder {
     PriorityQueue<Integer> small;
     PriorityQueue<Integer> large;

    public MedianFinder(){
        small = new PriorityQueue<>(Collections.reverseOrder());
        large = new PriorityQueue<>();
    }
    public void addNum(int num) {
       small.add(num);
       
       large.add(small.poll());
       if(large.size() > small.size()){
         small.add(large.poll());
       }
    }
    
    public double findMedian() {
        if(small.size() != large.size()){
            return small.peek();
        }
        return (small.peek() + large.peek())/2.0;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */