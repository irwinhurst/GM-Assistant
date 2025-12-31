# SlyFlourish Lazy Encounter Benchmark Guide

## Overview
The Lazy Encounter Benchmark provides a simple, memorizable system for gauging encounter difficulty without complex calculations or tables. It works excellently with D&D 2024 and provides more intuitive results than traditional encounter building.

## Core Calculation Formula

### Group Benchmark
**For levels 1-4**: Add all character levels ÷ 4
**For levels 5+**: Add all character levels ÷ 2

### Single Monster Benchmark  
**For levels 1-4**: Average character level
**For levels 5+**: 1.5 × average character level

### High-Power Scaling (11th+ level)
**For levels 11-16**: Use 3/4 of total character levels
**For levels 17-20**: Use total character levels (1:1 ratio)

## Benchmark Table Reference

| Level | 3 PCs | 4 PCs | 5 PCs | 6 PCs | Max Single CR |
|-------|-------|-------|-------|-------|---------------|
| 1     | 1     | 1     | 1     | 2     | 0.5           |
| 2     | 2     | 2     | 3     | 3     | 2             |
| 3     | 2     | 3     | 4     | 5     | 3             |
| 4     | 3     | 4     | 5     | 6     | 4             |
| 5     | 8     | 10    | 13    | 15    | 8             |
| 6     | 9     | 12    | 15    | 18    | 9             |
| 7     | 11    | 14    | 18    | 21    | 11            |
| 8     | 12    | 16    | 20    | 24    | 12            |
| 9     | 14    | 18    | 23    | 27    | 14            |
| 10    | 15    | 20    | 25    | 30    | 15            |
| 11    | 17-25 | 22-33 | 28-41 | 33-50 | 17            |
| 12    | 18-27 | 24-36 | 30-45 | 36-54 | 18            |
| 13    | 20-29 | 26-39 | 33-49 | 39-59 | 20            |
| 14    | 21-32 | 28-42 | 35-53 | 42-63 | 21            |
| 15    | 23-34 | 30-45 | 38-56 | 45-68 | 23            |
| 16    | 24-36 | 32-48 | 40-60 | 48-72 | 24            |
| 17    | 26-51 | 34-68 | 43-85 | 51-102| 26            |
| 18    | 27-54 | 36-72 | 45-90 | 54-108| 27            |
| 19    | 29-57 | 38-76 | 48-95 | 57-114| 29            |
| 20    | 30-60 | 40-80 | 50-100| 60-120| 30            |

## How to Use During Encounter Creation

### Step 1: Calculate Benchmarks
1. Determine party level and size
2. Calculate group benchmark using formula
3. Calculate single monster benchmark
4. Write both numbers for quick reference

**Example**: 4 characters at 7th level
- Group Benchmark: (7+7+7+7) ÷ 2 = 14
- Single Monster Benchmark: 1.5 × 7 = 10.5 (round to 11)
- Quick Reference: "Benchmark: 14 (11)"

### Step 2: Evaluate Encounters
1. Add up all monster CRs in the encounter
2. Compare total to group benchmark
3. Check if any single monster exceeds single monster benchmark
4. Assess if encounter may be deadly

**Deadly Indicators**:
- Total monster CRs > Group benchmark
- Any single monster CR > Single monster benchmark

### Step 3: Assign Difficulty Rating
Based on comparison to benchmarks:

- **Below 1/2 Benchmark**: Weak encounter
- **1/2 to 3/4 Benchmark**: Moderate encounter  
- **3/4 to 1x Benchmark**: Strong encounter
- **1x to 1.5x Benchmark**: Severe encounter
- **1.5x+ Benchmark**: Extreme encounter

## Encounter Creation Examples

### Example 1: Early Level Party
**Party**: 5 characters, 3rd level
**Benchmarks**: Group = 4, Single = 3

**Encounter**: 3 Goblins (CR 1/4 each) + 1 Hobgoblin (CR 1/2)
**Total CRs**: 0.75 + 0.5 = 1.25
**Rating**: Well below benchmark = **Weak encounter**

### Example 2: Mid-Level Party
**Party**: 4 characters, 7th level  
**Benchmarks**: Group = 14, Single = 11

**Encounter**: 1 Young Green Dragon (CR 8) + 2 Dryads (CR 1 each)
**Total CRs**: 8 + 2 = 10
**Rating**: Below benchmark but dragon within single limit = **Moderate encounter**

### Example 3: High-Level Party
**Party**: 6 characters, 12th level
**Benchmarks**: Group = 36 (or 54 high-power), Single = 18

**Encounter**: 1 Aboleth (CR 10) + 4 Chuul (CR 4 each)
**Total CRs**: 10 + 16 = 26
**Rating**: Below standard benchmark = **Moderate encounter** (or Weak if using high-power)

## Contextual Modifiers

### Encounters Play Easier When:
- Characters significantly outnumber foes
- Characters have clear tactical advantages
- Environment favors the characters  
- Monsters arrive in waves, not all at once
- Characters are well-rested with full resources
- Players use excellent tactical coordination

### Encounters Play Harder When:
- Monsters outnumber characters
- Monsters have positional advantages
- Terrain favors the foes
- Characters are worn down from previous encounters
- Monsters have strong tactical synergy
- Characters are surprised or disadvantaged

### Powerful Party Adjustments
For parties with powerful magic items, optimized builds, or strong teamwork:
- Add "virtual" characters to the calculation
- Example: Treat 4 powerful characters as 5 or 6 characters
- This increases the benchmark smoothly without level bumps

## Integration with Session Prep

### During Adventure Import
1. Calculate party benchmarks during session setup
2. Apply benchmarks to all extracted encounters  
3. Flag encounters that exceed benchmarks for review
4. Provide scaling suggestions for over/under-tuned encounters

### Template Population
When filling encounter templates, include:
- **SlyFlourish Benchmark**: The calculated party benchmarks
- **Total Monster CRs**: Sum of all creature CRs
- **Benchmark Ratio**: How encounter compares to benchmark
- **SlyFlourish Rating**: Weak/Moderate/Strong/Severe/Extreme
- **Contextual Notes**: Factors that might make encounter easier/harder

## Benefits of the Lazy Encounter Benchmark

1. **No Tables Required**: Can be calculated mentally
2. **Story-First Design**: Choose monsters that fit the narrative
3. **Simple Assessment**: Quick deadly/not-deadly determination
4. **Flexible Scaling**: Works with any party composition
5. **Proven Accuracy**: More reliable than traditional encounter building
6. **D&D 2024 Compatible**: Confirmed to work with 2024 edition

## Quick Reference Card

**Calculate Once, Use Everywhere**:
```
Party: [X] characters, Level [Y]
Group Benchmark: [Total levels ÷ 4 or ÷ 2]
Single Monster Benchmark: [Average level × 1 or × 1.5]
```

**Encounter Assessment**:
- Add all monster CRs
- Compare to group benchmark  
- Check single monster limit
- Assign difficulty rating

This system should be your primary encounter difficulty assessment tool during adventure import and encounter creation.

---
*Based on SlyFlourish's Lazy Encounter Benchmark | Creative Commons Attribution-NonCommercial 4.0*