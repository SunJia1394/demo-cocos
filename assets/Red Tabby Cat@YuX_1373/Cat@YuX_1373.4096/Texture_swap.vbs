Set objFSO = CreateObject("Scripting.FileSystemObject")

file1 = "texture_00.png"
file2 = "texture_001.png"

If objFSO.FileExists(file1) And objFSO.FileExists(file2) Then
    objFSO.MoveFile file1, "temp.txt"
    objFSO.MoveFile file2, file1
    objFSO.MoveFile "temp.txt", file2
End If
