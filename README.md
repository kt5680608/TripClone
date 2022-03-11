# What I Learned?
## Optional Channing
`?.` 연산자는 `.` 연산자와 유사하게 작동하지만, 만약 참조가`null` 혹은 `undefinded` 라면 에러 대신 `undefined`를 리턴한다. 따라서 참조가 누락될 가능성이 있거나 어떤 속성이 필요한지에 대한 보증이 확실치 않을때 사용하면 도움이 될 수 있다.
```javascript
{places?.map((place, i) => (
  <Grid ref={elRefs[i]} key={i} item xs={12}>
  	<PlaceDetails
		selected={Number(childClicked) === i}
		refProp={elRefs[i]}
    	place={place}
	/>
	</Grid>
))}
```

## API와 JSX의 분리
API 폴더에 axios를 통한 API 호출 함수를 작성하고 `App.js`에서 리턴 값만 받아 useState를 이용하여 받아온 데이터를 저장, 관리하였다.
```javascript
useEffect(() => {
  setIsLoading(true);
  getPlacesData(bounds.sw, bounds.ne).then((data) => {
    setPlaces(data);
    setIsLoading(false);
  });
}, [coordinates, bounds]);
```
