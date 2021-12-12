function solution(participant, completion) {
    const sorotedParticipant = participant.sort();
    const sorotedCompletion = completion.sort();
    
    for (let i = 0; i < sorotedParticipant.length; i += 1) {
        if (sorotedParticipant[i] !== sorotedCompletion[i]) {
            return sorotedParticipant[i]
        }
    }
}