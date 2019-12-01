func minTimeToVisitAllPoints(points [][]int) int {
    if len(points) == 1 {
        return 0
    }
    
    idx := 0
    steps := 0
    
    for idx < len(points)-1 {
        pt1 := points[idx]
        pt2 := points[idx+1]
        x := math.Abs(float64(pt1[0] - pt2[0]))
        y := math.Abs(float64(pt1[1] - pt2[1]))
        
        steps += int(math.Max(x,y))
        idx += 1
    }
    
    return steps
}
